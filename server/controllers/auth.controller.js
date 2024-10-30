import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import crypto from "crypto"
import { generateVerfCode } from "../utils/generateVerfCode.js"
import { genTokenAndSaveCookie } from "../utils/genTokenAndSaveCookie.js"
import { sendPasswordResetEmail, sendPasswordResetSuccessEmail, sendVerfEmail, sendWelcomeEmail } from "../mailtrap/emails.js"
export const signup = async (req,res)=>{
    const {email,password,name} = req.body
    try {
        if(!email || !password || !name){
            throw new Error("All fields are required!")
        }

        const userAlreadyExists = await User.findOne({email})
        if(userAlreadyExists){
            throw new Error("User already exists!")
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const verificationToken = generateVerfCode()
        const user = new User({
            email:email,
            password:hashedPassword,
            name:name,
            verificationToken:verificationToken,
            verificationExpiresAt:Date.now() + 24 * 60 * 60 * 1000,
        })
        await user.save()
        genTokenAndSaveCookie(res,user._id)

        sendVerfEmail(user.name,user.email,user.verificationToken)

        res.status(201).json({
            success:true,
            message:"User creation successful",
            user:{
                ...user._doc,
                password:undefined
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false,message:error.message})
    }
}

export const verifyEmail = async (req,res)=>{
    const {code} = req.body

    try {
        const user = await User.findOne({
            verificationToken:code,
            verificationExpiresAt:{$gt:Date.now()}
        })

        if(!user){
            return res.status(400).json({success:false,message:"Invalid or Expired verification code"})
        }

        user.isVerified = true
        user.verificationToken=undefined
        user.verificationExpiresAt=undefined
        await user.save()

        await sendWelcomeEmail(user.name,user.email)

        res.status(200).json({success:true,message:"Email verification successful"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:error.message})
    }
}

export const signin = async (req,res)=>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({email})
        if(!user)
            throw new Error("Invalid Email")

        const isPasswordValid = await bcrypt.compare(password,user.password)
        if(!isPasswordValid)
            throw new Error("Invalid Password")

        genTokenAndSaveCookie(res,user._id)

        user.lastLogin = Date.now()
        await user.save()
        
        res.status(200).json({success:true,message:"Login successful",user:{...user._doc,password:undefined}})
    } catch (error) {
        console.log("Login failed",error)
        res.status(400).json({success:false,message:error.message})
    }
}

export const logout = async (req,res)=>{
    res.clearCookie("token")
    res.status(200).json({success:true,message:"Logout successful"})
}
export const forgotPassword = async (req,res)=>{
    const {email} = req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            throw new Error("User does not exist")
        }

        const resetToken = crypto.randomBytes(20).toString("hex")
        const resetTokenExpiresAt = Date.now() + 1*60*60*1000

        user.resetPasswordToken = resetToken
        user.resetPasswordExpiresAt = resetTokenExpiresAt

        await user.save()

        await sendPasswordResetEmail(user.name,user.email,`${process.env.CLIENT_URL}/reset-password/${resetToken}`)

        res.status(200).json({success:true,message:"Password reset link sent successfully"})

    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}
export const resetPassword = async (req,res)=>{
    try {
        const {token} = req.params
        const {password} = req.body

        const user = await User.findOne({
            resetPasswordToken:token,
            resetPasswordExpiresAt:{$gt:Date.now()}
        })

        if(!user){
            throw new Error("Invalid or Expired reset token")
        }

        const hashedPassword = await bcrypt.hash(password,10)
        user.password = hashedPassword
        user.resetPasswordToken = undefined
        user.resetPasswordExpiresAt = undefined

        await user.save()

        await sendPasswordResetSuccessEmail(user.name,user.email)

        res.status(200).json({success:true,message:"Password reset successfull"})
    } catch (error) {
        console.log("Error in reset password",error)
        res.status(400).json({success:false,message:error.message})
    }
}
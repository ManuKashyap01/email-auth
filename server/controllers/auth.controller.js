import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateVerfCode } from "../utils/generateVerfCode.js"
import { genTokenAndSaveCookie } from "../utils/genTokenAndSaveCookie.js"
export const signup = async (req,res)=>{
    const {email,password,name} = req.body
    // console.log(email,password,name)
    try {
        if(!email || !password || !name){
            throw new Error("All fields are required!")
        }

        const userAlreadyExists = await User.findOne({email})
        // console.log(userAlreadyExists)
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
        // console.log(user)
        await user.save()
        genTokenAndSaveCookie(res,user._id)

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

export const signin = async (req,res)=>{
    res.send('sign in page')
}

export const logout = async (req,res)=>{
    res.send('log out page')
}
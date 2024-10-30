import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplate.js"
import { client, sender } from "./mailtrap.config.js"

export const sendVerfEmail = async (name,email,verificationToken) => {
    const recepient = [{email}]

    try {
        const response = await client.send({
            from:sender,
            to:recepient,
            subject:"Verify your Email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}',verificationToken).replace('{name}',name),
            category:"Email Verification"
        })
        console.log("Email sent successfully",response)
    } catch (error) {
        console.error('Error sending verification email',error)
        throw new Error(`Error sending verification email: ${error}`)   
    }
}

export const sendWelcomeEmail = async (name,email) => {
    const recepient = [{email}]

    try {
        const response = await client.send({
            from:sender,
            to:recepient,
            subject:"Welcome!",
            html:WELCOME_EMAIL_TEMPLATE.replace('{name}',name),
            category:"Welcome Email"
        })
        console.log("Email sent successfully",response)
    } catch (error) {
        console.error('Error sending welcome email',error)
        throw new Error(`Error sending welcome email: ${error}`)   
    }
}

export const sendPasswordResetEmail = async (name,email,url) => {
    const recepient = [{email}]
    console.log(name,email,url)
    try {
        const response = await client.send({
            from:sender,
            to:recepient,
            subject:"Reset Password",
            html:PASSWORD_RESET_REQUEST_TEMPLATE.replace('{name}',name).replace('{resetURL}',url),
            category:"Password reset"
        })
        console.log("Reset password email sent successfully",response)
    } catch (error) {
        console.log("Error sending reset passord request",error)
        throw new Error(`Error sending password request email: ${error}`)
    }
}

export const sendPasswordResetSuccessEmail = async(name,email) => {
    const recepient = [{email}]
    console.log(name,email)
    try {
        const response = await client.send({
            from:sender,
            to:recepient,
            subject:"Password Reset Successful",
            html:PASSWORD_RESET_SUCCESS_TEMPLATE.replace('{name}',name),
            category:"Password reset Successful"
        })
        console.log("Reset password success email sent successfully",response)
    } catch (error) {
        console.log("Error sending reset passord success",error)
        throw new Error(`Error sending password success email: ${error}`)
    }
}
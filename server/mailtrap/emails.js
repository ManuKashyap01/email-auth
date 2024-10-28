import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplate.js"
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
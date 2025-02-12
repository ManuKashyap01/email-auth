import express from 'express'
import { forgotPassword, logout, resetPassword, signin, signup, verifyEmail } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/logout',logout)

router.post('/verify-email',verifyEmail)
router.post('/forgot-password',forgotPassword)
router.post('/reset-password/:token',resetPassword)

export default router
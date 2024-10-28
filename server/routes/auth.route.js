import express from 'express'
import { logout, signin, signup, verifyEmail } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/logout',logout)

router.post('/verify-email',verifyEmail)
router.post('/forgot-password',forgotPassword)

export default router
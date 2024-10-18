import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './connectDB/connectDB.js'
import authRoutes from './routes/auth.route.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("Hello world!")
})

app.use(express.json()) // It will allow us to parse incoming requests under req.body with JSON format

app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    connectDB()
    console.log("server is live on localhost:",PORT)
})
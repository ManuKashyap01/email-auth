import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        console.log(process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('Db connected',conn.connection.host)
    } catch (error) {
        console.log("Error connecting db",error)
    }
}



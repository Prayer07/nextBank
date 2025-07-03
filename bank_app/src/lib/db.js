import mongoose from "mongoose"
// import dotenv from "dotenv"

// dotenv.config()

export const connectDB = async () =>{
    if (mongoose.connections[0].readyState)return
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Connected")
}
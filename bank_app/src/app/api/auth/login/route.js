import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export async function POST(req) {
    await connectDB()
    const {phone, password} = await req.json()

    const user = await User.findOne({phone})
    if(!user) return Response.json({error:"Invalid phone number"}, {status: 404})

    const match = await bcrypt.compare(password, user.password)
    if(!match) return Response.json({error: "Invalid password"}, {status: 401})

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d" })
    return Response.json({token, user: {id: user._id, fname: user.fname, balance: user.balance }})
}
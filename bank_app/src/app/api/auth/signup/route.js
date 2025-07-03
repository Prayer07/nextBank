import { connectDB } from "@/lib/db"
import User from "@/models/User"
import bcrypt from "bcryptjs"

export async function POST(req) {
    await connectDB()
    const {fname, lname, phone, password} = await req.json()

    const existing = await User.findOne({phone})
    if(existing) return Response.json({error: "Phone Number Already exist"}, {status: 400})
    
    const hashed = await bcrypt.hash(password, 10)

    const user = await User.create({fname, lname, phone, password: hashed})

    return Response.json({message: "User Created", user})
}
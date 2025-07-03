import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    phone: {
        type: Number,
        unique: true
    },
    password: String,
    balance: {
        type: Number,
        default: 0
    },
},
{
    timestamps: true
}
)

export default mongoose.models.User || mongoose.model("User", userSchema);
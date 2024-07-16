import mongoose from "mongoose";


const userSehma = new mongoose.Schema({
    name: {type:String, require:true },
    email: {type:String, require:true, unique:true},
    password: {type:String, require:true},
    createdAt: {type:String, default:Date.now},
})

export const User = mongoose.model("User", userSehma);
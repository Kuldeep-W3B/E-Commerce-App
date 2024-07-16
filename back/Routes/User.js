import express from "express";
import { users, login, register, profile } from "../Controllers/User.js";

const userRouter = express.Router();

// rsgister user
userRouter.post("/register",register);

// login user 
userRouter.post("/login",login);

// get all user
userRouter.get("/getAllUer",users);

userRouter.get("profile",profile)

export default userRouter; 
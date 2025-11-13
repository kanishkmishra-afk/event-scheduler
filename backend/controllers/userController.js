import { genToken } from "../config/token.js"
import { User } from "../models/userModel.js"
import cookieParser from "cookie-parser"

export const registerUser=async(req,res)=>{
    try {
        const {userName,email,password}=req.body
        //i will write some validation logic here
        const user=await User.create({
            userName,
            email,
            password
        })
        //i will write password hashing logic here later using bcrypt pacage
        const token= await genToken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(201).json(user)

    } catch (error) {
        console.log("register User ERROR::",error);
        
    }
}
export const login=async(req,res)=>{
    try {
        const{email,password}=req.body

        const user= await User.findOne({email})
        //i will put validation logic or checks here

        if(user.password!==password){
            return res.status(400).json({message:"password Mismatch"})
        }
        const token= await genToken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })

        return res.status(200).json(user)

    } catch (error) {
        console.log("login ERROR::",error);
        
    }
}

export const getCurrentUser = async (req,res) => {
    try {
        let user = await User.findById(req.userId).select("-password")
        console.log("getcurrent",user);
        
        if(!user){
           return res.status(404).json({message:"user is not found"}) 
        }
        return res.status(200).json(user)
    } catch (error) {
         console.log(error)
    return res.status(500).json({message:`getCurrentUser error ${error}`})
    }
}
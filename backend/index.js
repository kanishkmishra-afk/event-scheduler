import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import eventRoute from './routes/eventRoute.js';
import cors from 'cors'
import userRoute from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';

dotenv.config()
const app=express()
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))
const PORT=process.env.PORT
app.use(express.json())
app.use("/api/user",userRoute)
app.use("/api/event",eventRoute)
app.get("/",(req,res)=>{
    res.send(`hello from server`)
})

app.listen(PORT,()=>{
    console.log(`server is listining on port : ${PORT}`);
    connectDB()
    
})
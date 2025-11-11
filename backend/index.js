import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import eventRoute from './routes/eventRoute.js';

dotenv.config()
const app=express()
const PORT=process.env.PORT
app.use(express.json())
app.use("/api/event",eventRoute)
app.get("/",(req,res)=>{
    res.send(`hello from server`)
})

app.listen(PORT,()=>{
    console.log(`server is listining on port : ${PORT}`);
    connectDB()
    
})
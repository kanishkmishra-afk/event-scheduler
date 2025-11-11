import { Event } from "../models/eventModel.js"
//create event API
export const createEvent=async(req,res)=>{
    try {
        const {title,description,location,atttendies}=req.body
        //validation code pending...
        const event=await Event.create({
            title,
            description,
            location,
            atttendies
        })
        return res.status(201).json(event)
    } catch (error) {
        console.log("create event ERROR ::",error);
        
    }
}
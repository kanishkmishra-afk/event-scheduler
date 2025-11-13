import { Event } from "../models/eventModel.js"
import { User } from "../models/userModel.js"
//create event API
export const createEvent=async(req,res)=>{
    try {
        const {title,description,location,atttendies}=req.body
        //validation code pending...
        const event=await Event.create({
            title,
            description,
            location,
            atttendies,
        })
        return res.status(201).json(event)
    } catch (error) {
        console.log("create event ERROR ::",error);
        
    }
}

//edit event: here i will get the event and its value which ive to change
export const editEvent=async(req,res)=>{
    try {
        const {eventId,title,description,location}=req.body

        const event=await Event.findByIdAndUpdate(eventId,{
            title,
            description,
            location
        },
        {new:true}
    )
        return res.status(201).json(event)
    } catch (error) {
        console.log("edit event ERROR ::",error);
        
    }
}
//delete Event API : i will just send the response message and frontend will manage it
export const deleteEvent=async(req,res)=>{
    try {
        const {eventId}=req.body
        await Event.findByIdAndDelete(eventId)
        return res.status(200).json({message:"event deleted successfullt"})
        
    } catch (error) {
        console.log(("delete event ERROR::",error));
        
    }
}

export const getAllEvents=async(req,res)=>{
    try {
        const events=await Event.find({})

        return res.status(200).json(events)
    } catch (error) {
        console.log("get all events ERROR ::",error);
        
    }
}


export const joinEvent=async(req,res)=>{
    try {
        const {eventId}=req.body
        const userId=req.userId
        const user= await User.findById(userId)
    //we can perform some checks here also
        const name=user.userName
        const event= await Event.findByIdAndUpdate(eventId,{$addToSet:{atttendies:name}},
            {new:true}
        )
        //more checks can goes here
        
        return res.status(201).json(event)
    } catch (error) {
        console.log(("join Event ERROR ::",error));
        
    }
}

export const leaveEvent=async(req,res)=>{
    try {
         const {eventId}=req.body
        const userId=req.userId
        const user= await User.findById(userId)
    //we can perform some checks here also
        const name=user.userName
        const event=await Event.findByIdAndUpdate(eventId,{$pull:{atttendies:name}},
            {new:true}
        )
        //more checks can goes here
        
        return res.status(201).json(event)
    } catch (error) {
        console.log(("leave Event ERROR ::"),error);
        
    }
}
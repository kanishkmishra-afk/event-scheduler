import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },

    atttendies:[
        {
            type : String
        }
    ]
    //here instead of storing attendies as array of user objects we will create a diffrent model for attendies and store only their ids there as wll as event id to which they are attending because if we store array of user objects here it will increase the size of event document and also if number of attendies in thousands than it will exceed the document size limit of mongodb
},{timestamps:true})

export const Event=mongoose.model("Event",eventSchema)
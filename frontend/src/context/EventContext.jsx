import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const eventContext=createContext()

export const EventContextProvider=({children})=>{
    const [events,setEvents]=useState([])
    const serverURL="http://localhost:3000/"

    const getEvents=async()=>{
        const response=await axios.get(serverURL + "api/event/getAllEvents")
        setEvents(response.data)
    }
    
    useEffect(()=>{
        getEvents()
    },[])
    console.log(events);

    const value={
        events,
        setEvents,
        serverURL
    }
    
    return (
        <eventContext.Provider value={value}>
            {children}
        </eventContext.Provider>
    )
}
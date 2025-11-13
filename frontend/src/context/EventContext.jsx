import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { userContext } from "./UserContext";

export const eventContext=createContext()

export const EventContextProvider=({children})=>{
    const [events,setEvents]=useState([])
    const {user,setUser}=useContext(userContext)
    const serverURL="http://localhost:3000/"

    const getEvents=async()=>{
        const response=await axios.get(serverURL + "api/event/getAllEvents",{withCredentials:true})
        console.log("print",response.data);
        
        setEvents(response.data)
    }
    //one thing to note here is whithout checking user if we call getEvents it will be slower response as it makes unnecessary calls to backend when there is no user logged in
    useEffect(()=>{
        if(user){
            getEvents()
        }
    },[setEvents,user])
    console.log("context",events);

    const value={
        events,
        setEvents,
        serverURL,
        getEvents
    }
    
    return (
        <eventContext.Provider value={value}>
            {children}
        </eventContext.Provider>
    )
}
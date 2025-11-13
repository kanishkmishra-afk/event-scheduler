import { createContext, useContext, useEffect, useState } from "react";
import { eventContext } from "./EventContext";
import axios from "axios";


export const userContext=createContext()

export const UserContextProvider=({children})=>{
    const [user,setUser]=useState("")
    const serverURL="http://localhost:3000/"

    const getCurrentUser=async()=>{
        try {
           const response=await axios.get(serverURL+"api/user/getCurrentUser",{withCredentials:true}) 
           console.log("data",response.data);
           setUser(response.data)
           
        } catch (error) {
            console.log("get current user ERROR::",error);
            
        }
    }
    useEffect(()=>{
        getCurrentUser()
    },[setUser])

    console.log("getcurret user",user);
    
    const value={
        user,
        setUser,
        serverURL,
        getCurrentUser
    }

    return(
        <userContext.Provider value={value} >
            {children}
        </userContext.Provider>
    )
}
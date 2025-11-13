import axios from 'axios'
import React, { useContext, useState } from 'react'
import { eventContext } from '../context/EventContext'
import { userContext } from '../context/UserContext'

function AddEvent() {
    const {events,setEvents,serverURL}=useContext(eventContext)
    const {user}=useContext(userContext)
    const [newevent,setNewEvent]=useState({
        title:"",
        description:"",
        location:"",
        datetime:""
    })
console.log(user);
    const handleEvent=async(e)=>{
        e.preventDefault()
        try {
            const response=await axios.post(serverURL+"api/event/createEvent",{title:newevent.title,description:newevent.description,location:newevent.location},{withCredentials:true})
            if(response.data){
                setEvents((prevEvent)=>[...events,response.data])
            }
        } catch (error) {
            console.log("handleEvent ERROR::",error);
            
        }
    }
  return (
    <div className='className="max-w-md mx-auto p-4 rounded-lg shadow-lg "'>
      <form onSubmit={handleEvent} className='space-x-4 space-y-10 p-10 bg-gray-800 rounded-lg mt-20'>
        <input onChange={(e)=>setNewEvent((prev)=>({...prev,title:e.target.value}))} type="text"  required placeholder='title' className="w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input onChange={(e)=>setNewEvent((prev)=>({...prev,description:e.target.value}))} type="text"  required placeholder='description' className="w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input onChange={(e)=>setNewEvent((prev)=>({...prev,location:e.target.value}))} type="text"  required placeholder='location' className="w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input onChange={(e) =>setNewEvent((prev) => ({ ...prev, datetime: e.target.value }))} type="datetime-local" required className="w-[250px] px-10 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors">ADD EVENT</button>
      </form>
    </div>
  )
}

export default AddEvent

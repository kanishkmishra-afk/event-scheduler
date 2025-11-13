import React, { useContext, useEffect, useState } from 'react'
import { eventContext } from '../context/EventContext'
import axios from 'axios'
import { userContext } from '../context/UserContext'

function Event() {
    const {events,setEvents,serverURL,getEvents}=useContext(eventContext)
    const {user,setUser}=useContext(userContext)
    //handler logic when user clicks on join button
    console.log("events co",events);
    const handleJoin=async(eventId)=>{
        try {
          const response= await axios.post(serverURL+"api/event/joinEvent",{eventId},{withCredentials:true})
          if(response.data){
            console.log(response.data);
            setEvents(prevEvent=> prevEvent.map(event=>event._id===eventId?response.data:event))
          }
        } catch (error) {
          console.log("handle join ERROR::",error);
          
        }
      }
    //handler logic when user clicks on Leave button
    const handleLeave=async(eventId)=>{
      try {
        const response= await axios.post(serverURL+"api/event/leaveEvent",{eventId},{withCredentials:true})
        if(response.data){
          console.log(response.data);
          setEvents(prevEvent=> prevEvent.map(event=>event._id===eventId?response.data:event))
        }
      } catch (error) {
        console.log("handle Leave ERROR::",error);
          
        }
    }
  return (
    <div className="space-y-10 p-10">
      {
        events.map((event)=>{
            const date= event.createdAt.slice(0,10)
            let isJoined=false;
            return (
                    <div key={event._id} className="flex flex-col justify-between bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-white">{event.title}</h3>
                            <p className="text-gray-300 mb-2">{event.description}</p>
                            <p  className="text-gray-400 italic mb-2">{event.location}</p>
                            <div className="text-sm text-red-500 flex space-x-4">
                                <span>{date}</span>
                                 <span>{event.createdAt.slice(11, 16)}</span>
                              </div>
                              <div  className="flex flex-wrap space-x-2 text-gray-400 italic mb-2">Atttendies:- <p> </p>{event.atttendies.map((atttendie,index)=>{
                                 if(atttendie==user.userName){
                                  isJoined=true
                                 }

                                  return (
                                     <div key={index}>
                                        <p> {atttendie}</p>
                                    </div>
                                  )
                                })}</div>
                            </div>

                          {!isJoined ? <button onClick={()=>{handleJoin(event._id)}} className='text-white mt-5 bg-green-500 rounded-lg'>JOIN</button> : <button onClick={()=>handleLeave(event._id)} className='text-white mt-5 bg-red-500 rounded-lg'>LEAVE</button>}
                        
                    </div>
                    )
        })
      }
    </div>
  )
}

export default Event

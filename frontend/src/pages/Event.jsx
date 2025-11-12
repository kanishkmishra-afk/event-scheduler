import React, { useContext, useState } from 'react'
import { eventContext } from '../context/EventContext'

function Event() {
    const {events,setEvents}=useContext(eventContext)
    const[isJoin,setIsJoin]=useState(false)
  return (
    <div className="space-y-10 p-10">
      {
        events.map((event)=>{
            const date= event.createdAt.slice(0,10)
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
                            </div>

                          {!isJoin && <button onClick={()=>setIsJoin(!isJoin)} className='text-white mt-5 bg-green-500 rounded-lg'>JOIN</button>}
                          {isJoin && <button onClick={()=>setIsJoin(!isJoin)} className='text-white mt-5 bg-red-500 rounded-lg'>LEAVE</button>}
                    </div>
                    )
        })
      }
    </div>
  )
}

export default Event

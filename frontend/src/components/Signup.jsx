import axios from 'axios'
import React, { useContext, useState } from 'react'
import { eventContext } from '../context/EventContext'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../context/UserContext'

function Signup() {
    const {serverURL}=useContext(eventContext)
    const {user,setUser,getCurrentUser}=useContext(userContext)
    const navigate=useNavigate()
    const [signupData,setSignupData]=useState({
        userName:"",
        email:"",
        password:""
    })
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response=await axios.post(serverURL+"api/user/registerUser",{userName:signupData.userName,email:signupData.email,password:signupData.password},{withCredentials:true})
            if(response.data){
              console.log(response.data)
              setUser(response.data)
                navigate("/")
            }
        } catch (error) {
            console.log("signup handle Submit ERROR::",error);
            
        }
    }
  return (
    <div className="max-w-lg w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-lg pt-10 mt-40">
        <p className='text-xl text-white px-30'>Sign up to see events</p>
      <form onSubmit={handleSubmit} className="space-y-10 pt-3">
        {/* we can also add an name property here inside input and then send it to the handle submit through event and change its value accordingly([key]:value) */}
        <input onChange={(e)=>setSignupData(prevData=>({...prevData,userName:e.target.value}))} type="text" required placeholder='userName' className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        <input onChange={(e)=>setSignupData(prevData=>({...prevData,email:e.target.value}))} type="email" required placeholder='email' className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        <input onChange={(e)=>setSignupData(prevData=>({...prevData,password:e.target.value}))}  type="password" required placeholder='password'className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
        <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors">SIGN UP</button>
      </form>
      <div>
        <p className='text-white pt-2 px-25'>Already have an Account <span onClick={()=>navigate("/login")} className='text-blue-600'>LOGIN</span></p>
      </div>
    </div>
  )
}

export default Signup

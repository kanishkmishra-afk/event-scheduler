import { useContext, useState } from 'react'
import Nav from './components/Nav.jsx'
import Event from './pages/Event.jsx'
import { Route, Routes } from 'react-router-dom'
import AddEvent from './components/AddEvent.jsx'
import Login from './components/Login.jsx'
import { userContext } from './context/UserContext.jsx'
import Signup from './components/Signup.jsx'

function App() {
  const {user,setUser}=useContext(userContext)

  return (
    <>
     {user && <Nav />}
      <Routes>
        
        <Route path='/login' element={!user && <Login />} />
        <Route path='/signup' element={!user && <Signup />} />
        <Route path='/' element={user ? <Event />: <Login />} />
        <Route path='/addEvent' element={user && <AddEvent /> } />
      </Routes>
    </>
  )
}

export default App

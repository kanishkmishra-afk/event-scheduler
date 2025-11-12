import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Event from './pages/Event.jsx'
import { Route, Routes } from 'react-router-dom'
import AddEvent from './components/AddEvent.jsx'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Event />} />
        <Route path='/addEvent' element={<AddEvent /> } />
      </Routes>
    </>
  )
}

export default App

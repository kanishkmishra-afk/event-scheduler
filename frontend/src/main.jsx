import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

import { EventContextProvider } from './context/EventContext.jsx'
import { UserContextProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContextProvider>
      <EventContextProvider>
        <App />
      </EventContextProvider>
  </UserContextProvider>
      </BrowserRouter>
)

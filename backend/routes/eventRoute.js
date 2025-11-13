import expess from 'express'
import { createEvent, deleteEvent, editEvent, getAllEvents, joinEvent, leaveEvent } from '../controllers/eventController.js'
import isAuth from '../middlewares/isAuth.js'

const eventRoute= expess.Router()

eventRoute.post("/createEvent",isAuth,createEvent)
eventRoute.post("/joinEvent",isAuth,joinEvent)
eventRoute.post("/leaveEvent",isAuth,leaveEvent)
eventRoute.get("/getAllEvents",isAuth,getAllEvents)
eventRoute.post("/deleteEvent",isAuth,deleteEvent)
eventRoute.post("/editEvent",isAuth,editEvent)

export default eventRoute
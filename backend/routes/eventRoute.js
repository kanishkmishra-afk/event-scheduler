import expess from 'express'
import { createEvent, deleteEvent, editEvent, getAllEvents, joinEvent, leaveEvent } from '../controllers/eventController.js'

const eventRoute= expess.Router()

eventRoute.post("/createEvent",createEvent)
eventRoute.post("/joinEvent",joinEvent)
eventRoute.post("/leaveEvent",leaveEvent)
eventRoute.get("/getAllEvents",getAllEvents)
eventRoute.post("/deleteEvent",deleteEvent)
eventRoute.post("/editEvent",editEvent)

export default eventRoute
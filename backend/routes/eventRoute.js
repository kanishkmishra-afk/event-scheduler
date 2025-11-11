import expess from 'express'
import { createEvent } from '../controllers/eventController.js'

const eventRoute= expess.Router()

eventRoute.post("/createEvent",createEvent)

export default eventRoute
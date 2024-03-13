import express from "express";
import { allBookedRooms, availableRooms, bookRoom, bookedCount, bookedRoomshow, createRoom } from "../Controller/roomController.js";

const router = express.Router()

router.get('/avilablerooms', (availableRooms))
router.post('/create_room', (createRoom))
router.post('/book', bookRoom)
router.get('/bookedrooms', allBookedRooms)
router.get('/bookedroomscondition', bookedRoomshow)
router.get('/count/:name', bookedCount)
export default router;
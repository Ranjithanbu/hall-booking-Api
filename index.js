import express, { json } from "express";
import roomAppRoute from "./Router/roomRoute.js";
import cors from 'cors'
const app = express();
app.use(json())
const PORT = 4000;

//allow to access the port

app.use(cors())

// navigate to rooRoute

app.use('/api', roomAppRoute)

// Listening the Port

app.listen(PORT, () => {
    console.log(`${PORT} is running`)
})
import express from "express"
import cors from "cors"

const app = express();

app.use(cors({
    origin:[process.env.CORS_ORIGIN],
    methods:["POST"],
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true})) 

// routers
import contactRouter from "./routes/contact.router.js"

app.use('/api/v1',contactRouter)


export {app}
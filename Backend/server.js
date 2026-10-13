import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

connectDB();

//api endpoint  
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


//mongodb+srv://rafiksh4_db_user:<db_password>@cluster0.fpzwoaf.mongodb.net/



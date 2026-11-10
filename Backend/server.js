import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

// connectDB();

//api endpoint  
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, "0.0.0.0", () => {
            console.log(`Server Started on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();


//mongodb+srv://rafiksh4_db_user:<db_password>@cluster0.fpzwoaf.mongodb.net/



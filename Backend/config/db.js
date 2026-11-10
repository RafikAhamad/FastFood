// import mongoose from "mongoose";


// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://rafiksh4_db_user:ahmadSh4@cluster0.fpzwoaf.mongodb.net/fast-food').then(()=>console.log("DB Connected"));
// }

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw error;
    }
};
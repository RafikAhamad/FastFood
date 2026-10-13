import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rafiksh4_db_user:ahmadSh4@cluster0.fpzwoaf.mongodb.net/fast-food').then(()=>console.log("DB Connected"));
}


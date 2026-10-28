import mongoose from "mongoose";
async function connectDB() {
    try{
        await mongoose.connect(process.env,MONGO_URL);
        console.log("MongoDB connected")

    }catch(error){
        console.log("MongoDB connecttion failed", error.mongoose);
        process.exit(1);

    }
    
}
export default connectDB;
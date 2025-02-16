import mongoose from "mongoose";
const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB is successfully Connected");
    }
    catch(error)
    {
        console.log(`Error in Connecting Db: ${error}`);
        process.exit(1);
    }
    
}
export default connectDB;
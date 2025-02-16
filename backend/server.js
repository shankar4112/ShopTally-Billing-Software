import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connectDB.js";
import productRoutes from "./routes/productRoutes.js";
const App=express();
dotenv.config();
const PORT=process.env.PORT||3000;
App.use(express.json());
App.use("/api/products",productRoutes);
App.listen(PORT,()=>{
    console.log(`Server is deployed at ${PORT}`);
    connectDB();
})
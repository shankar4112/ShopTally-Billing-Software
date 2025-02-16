import Product from "../models/productModel.js";
export const addProduct=async(req,res)=>{
    try{
         const {name,price,category,stock,gst,barcode}=req.body;
         const newProduct=new Product({name,price,category,stock,gst,barcode});
         await newProduct.save();
         res.status(201).json({message:"Product added successfully",product:newProduct});
    }
    catch{
        res.status(500).json({error:"Error in Adding Product"});
    }

};

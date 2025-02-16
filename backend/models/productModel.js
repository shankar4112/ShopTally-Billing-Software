import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    category:{
    type:String,
    required:true
},
stock:{
    type:Number,
    required:true
},
gst:{
    type:Number,
    default:0
},
barcode:{
    type:String,
    unique:true,
    required:false
},

    

},{timestamp:true});
const Product = mongoose.model("Product",productSchema);
export default Product;
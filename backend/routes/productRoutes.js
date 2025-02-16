import express from "express";
import { addProduct } from "../controller/productController.js";
const router=express.Router();
router.post("/add",addProduct);
// router.get("/all",getProduct);
// router.put("/update/:id",updateProduct);
// router
export default router;
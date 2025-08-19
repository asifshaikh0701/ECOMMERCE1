import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
  getSellerProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, authorize } from "../middlewares/auth.js";

const productRouter = express.Router();

// 🔐 Add product (only sellers)
productRouter.post("/add-product", protect, authorize("seller"), addProduct);

// 🌐 Public: Get all products
productRouter.get("/getallproduct", getAllProducts);

// ✅ Public: Get product by ID (for ProductDetails page)
productRouter.get("/:id", getProductById);

// 🔐 Seller's own products
productRouter.get("/seller/products", protect, authorize("seller"), getSellerProducts);

// ✏️ Update product
productRouter.put("/update/:id", protect, authorize("seller"), updateProduct);

// ❌ Delete product
productRouter.delete("/delete/:id", protect, authorize("seller"), deleteProduct);

export default productRouter;

import express from "express";
import { addToCart, getCartByCustomer, removeFromCart } from "../controllers/cartController.js";
import { protect } from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add-product", protect, addToCart);
cartRouter.get("/getcart/:customerId", protect, getCartByCustomer);
cartRouter.delete("/remove-product/:customerId/:productId", protect, removeFromCart);

export default cartRouter;

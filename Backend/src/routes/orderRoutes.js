import express from "express";
import { placeOrder, getOrdersByCustomer, getOrdersBySeller } from "../controllers/orderController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Place a new order
router.post("/placeorder", verifyToken, placeOrder);

// Get orders by customer
router.get("/customer/:id", verifyToken, getOrdersByCustomer);

// Get orders by seller
router.get("/seller/:id", verifyToken, getOrdersBySeller);

export default router;

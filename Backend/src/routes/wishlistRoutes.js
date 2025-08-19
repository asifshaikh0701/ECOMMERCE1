import express from "express";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../controllers/wishlistController.js";
import { protect } from "../middlewares/auth.js";

const wishlistRouter = express.Router();

wishlistRouter.get("/", protect, getWishlist);
wishlistRouter.post("/add", protect, addToWishlist);
wishlistRouter.delete("/remove/:productId", protect, removeFromWishlist);

export default wishlistRouter;

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, default: "Cash on Delivery" },
  status: { type: String, default: "pending", enum: ["pending", "shipped", "delivered"] },
}, { timestamps: true });

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;

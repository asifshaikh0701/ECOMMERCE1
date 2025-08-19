import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

// Place Order
export const placeOrder = async (req, res) => {
  try {
    const { customerId, customerName, address, phone, items, totalAmount, paymentMethod } = req.body;

    if (!customerId || !customerName || !address || !phone || !items || items.length === 0) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate products & set prices
    for (let i = 0; i < items.length; i++) {
      const product = await Product.findById(items[i].productId);
      if (!product) return res.status(404).json({ message: `Product not found: ${items[i].productId}` });
      items[i].price = product.price;
    }

    const firstProduct = await Product.findById(items[0].productId);

    const newOrder = new Order({
      customerId,
      sellerId: firstProduct.createdBy, // Make sure Product has createdBy
      items,
      customerName,
      address,
      phone,
      totalAmount,
      paymentMethod: paymentMethod || "Cash on Delivery",
    });

    await newOrder.save();

    // Remove purchased items from cart
    await Cart.updateOne(
      { customerId },
      { $pull: { products: { productId: { $in: items.map(i => i.productId) } } } }
    );

    res.status(201).json({ message: "✅ Order placed successfully!", order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// Get orders by customer
export const getOrdersByCustomer = async (req, res) => {
  try {
    const orders = await Order.find({ customerId: req.params.id })
      .populate("items.productId")
      .sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// Get orders by seller
export const getOrdersBySeller = async (req, res) => {
  try {
    const orders = await Order.find({ sellerId: req.params.id })
      .populate("items.productId customerId")
      .sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

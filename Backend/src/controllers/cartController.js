import Cart from "../models/Cart.js";

// Add to cart
export const addToCart = async (req, res) => {
  try {
    const { customerId, productId, quantity } = req.body;

    let cart = await Cart.findOne({ customerId });

    if (!cart) {
      cart = new Cart({ customerId, products: [{ productId, quantity }] });
    } else {
      const existingItem = cart.products.find(
        (item) => item.productId.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity || 1;
      } else {
        cart.products.push({ productId, quantity });
      }
    }

    await cart.save();
    const populatedCart = await cart.populate("products.productId");
    res.status(200).json(populatedCart.products);
  } catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ error: "Add to cart failed", details: err.message });
  }
};

// Get cart
export const getCartByCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;

    const cart = await Cart.findOne({ customerId }).populate("products.productId");

    if (!cart) return res.status(200).json([]); // empty cart

    // Remove invalid products
    const validProducts = cart.products.filter((item) => item.productId !== null);
    cart.products = validProducts;
    await cart.save();

    res.status(200).json(validProducts);
  } catch (err) {
    console.error("Fetch cart error:", err);
    res.status(500).json({ error: "Fetch cart failed", details: err.message });
  }
};

// Remove from cart
export const removeFromCart = async (req, res) => {
  try {
    const { customerId, productId } = req.params;

    const cart = await Cart.findOne({ customerId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.products = cart.products.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    const populatedCart = await cart.populate("products.productId");
    res.status(200).json(populatedCart.products);
  } catch (err) {
    console.error("Remove from cart error:", err);
    res.status(500).json({ error: "Remove from cart failed", details: err.message });
  }
};

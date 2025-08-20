


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Checkout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const initialCartItems = location.state?.cartItems || [];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    landmark: "",
  });
  const [message, setMessage] = useState("");

  // Redirect to cart page if no cart items
  useEffect(() => {
    if (!initialCartItems.length) navigate("/customer/dashboard/cart");
  }, [initialCartItems, navigate]);

  const calculateTotal = () =>
    cartItems.reduce(
      (acc, item) => acc + (item.productId?.price || 0) * item.quantity,
      0
    );

  const handleChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cartItems.length) return;

    try {
      await axios.post(
        "https://ecommerce1-tq6e.onrender.com/api/orders/placeorder",
        {
          customerId: user._id,
          customerName: customerDetails.name,
          phone: customerDetails.phone,
          address: `${customerDetails.street}, ${customerDetails.city}, ${customerDetails.state}, ${customerDetails.postalCode}`,
          landmark: customerDetails.landmark,
          items: cartItems.map((item) => ({
            productId: item.productId._id,
            quantity: item.quantity,
            price: item.productId.price,
          })),
          totalAmount: calculateTotal(),
          paymentMethod: "Cash on Delivery",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setCartItems([]);
      setMessage("✅ Order placed successfully! Cash on Delivery selected.");
    } catch (err) {
      console.error("❌ Order failed:", err.response?.data || err);
      setMessage("❌ Could not place order. Try again.");
    }
  };

  if (!cartItems.length && !message) return null; // wait for redirect

  return (
    <div className="min-h-screen pt-[80px] px-6 py-12 bg-gradient-to-br from-green-50 to-white text-gray-800">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          📝 Checkout
        </h1>

        {message && (
          <p className="text-center text-green-600 font-medium mb-4">{message}</p>
        )}

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 mt-4">
            Your cart is empty after placing the order.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customerDetails.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />

            {/* Phone Number */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={customerDetails.phone}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />

            {/* Street Address */}
            <textarea
              name="street"
              placeholder="Street Address (House No, Area, Colony)"
              value={customerDetails.street}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            ></textarea>

            {/* City + State + Postal Code */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={customerDetails.city}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={customerDetails.state}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={customerDetails.postalCode}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            {/* Landmark (Optional) */}
            <input
              type="text"
              name="landmark"
              placeholder="Landmark (Optional)"
              value={customerDetails.landmark}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />

            {/* Total */}
            <div className="text-right text-xl font-bold mt-4">
              Total: ₹{calculateTotal()}
            </div>

            <p className="text-gray-700 font-medium mb-2 mt-2">
              Payment Method: <span className="text-green-700">Cash on Delivery</span>
            </p>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow w-full"
            >
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Checkout;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const SellerOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const user = JSON.parse(localStorage.getItem("user"));

//         const res = await axios.get(
//           `http://localhost:5000/api/orders/seller/${user._id}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         setOrders(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching seller orders:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <p className="p-4">Loading orders...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">📦 Customer Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {orders.map((order) => {
//             const product = order.productId || {};
//             const customer = order.customerId || {};
//             const imageSrc = product.image?.startsWith("http")
//               ? product.image
//               : `http://localhost:5000/uploads/${product.image}`;

//             return (
//               <li key={order._id} className="border p-4 rounded shadow bg-white">
//                 <div className="flex items-center gap-4">
//                   {product.image ? (
//                     <img
//                       src={imageSrc}
//                       alt={product.name}
//                       className="w-20 h-20 object-cover rounded"
//                       onError={(e) => (e.target.src = "/default.jpg")}
//                     />
//                   ) : (
//                     <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded text-gray-500">
//                       No Image
//                     </div>
//                   )}

//                   <div>
//                     <p className="font-semibold text-lg">{product.name}</p>
//                     <p><strong>Customer:</strong> {customer.name || "N/A"}</p>
//                     <p><strong>Quantity:</strong> {order.quantity}</p>
//                     <p><strong>Status:</strong> {order.status}</p>
//                     <p className="text-sm text-gray-500">
//                       Ordered on:{" "}
//                       {new Date(order.createdAt).toLocaleString("en-IN", {
//                         dateStyle: "medium",
//                         timeStyle: "short",
//                       })}
//                     </p>
//                   </div>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SellerOrders;

import React, { useEffect, useState } from "react";
import axios from "axios";

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));

        const res = await axios.get(
          `http://localhost:5000/api/orders/seller/${user._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setOrders(res.data);
      } catch (err) {
        console.error("❌ Error fetching seller orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-gray-700">Loading orders...</p>;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-green-100 via-gray-200 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          📦 Customer Orders
        </h2>

        {orders.length === 0 ? (
          <p className="text-center text-gray-700">No orders yet.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => {
              const product = order.productId || {};
              const customer = order.customerId || {};
              const imageSrc = product.image?.startsWith("http")
                ? product.image
                : `http://localhost:5000/uploads/${product.image}`;

              // Status color coding
              let statusColor = "bg-gray-300 text-gray-800";
              if (order.status === "Pending") statusColor = "bg-yellow-200 text-yellow-900";
              if (order.status === "Shipped") statusColor = "bg-blue-200 text-blue-900";
              if (order.status === "Delivered") statusColor = "bg-green-200 text-green-900";
              if (order.status === "Cancelled") statusColor = "bg-red-200 text-red-900";

              return (
                <li
                  key={order._id}
                  className="bg-gradient-to-r from-green-100 via-gray-200 to-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-green-100"
                >
                  <div className="p-4 flex gap-4">
                    {product.image ? (
                      <img
                        src={imageSrc}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                        onError={(e) => (e.target.src = "/default.jpg")}
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
                        No Image
                      </div>
                    )}

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                        <p className="text-gray-700"><strong>Customer:</strong> {customer.name || "N/A"}</p>
                        <p className="text-gray-700"><strong>Quantity:</strong> {order.quantity}</p>
                        <p className={`inline-block px-2 py-1 mt-2 text-xs font-semibold rounded-full ${statusColor}`}>
                          {order.status}
                        </p>
                      </div>
                      <p className="text-gray-500 text-sm mt-2">
                        Ordered on:{" "}
                        {new Date(order.createdAt).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SellerOrders;



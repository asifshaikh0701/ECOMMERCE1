// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import CustomerSidebar from "./components/CustomerSidebar";

// import Orders from "./Orders";
// import Profile from "./Profile";

// import Recommended from "./Recommended";
// import Wallet from "./Wallet";
// import HelpContact from "./HelpContact";

// const CustomerDashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/6 bg-white shadow-md h-screen">
//         <CustomerSidebar />
//       </div>

//       {/* Main content */}
//       <div className="w-4/5 p-6 overflow-y-auto">
//         <Routes>
//           <Route path="orders" element={<Orders />} />
//           <Route path="profile" element={<Profile />} />
//           <Route path="recommended" element={<Recommended />} />
//           <Route path="wallet" element={<Wallet />} />
//           <Route path="help-contact" element={<HelpContact />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default CustomerDashboard;
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import CustomerSidebar from "./components/CustomerSidebar";

import Orders from "./Orders";
import Profile from "./Profile";
import Recommended from "./Recommended";
import Wallet from "./Wallet";
import HelpContact from "./HelpContact";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Checkout from "./Checkout";

const CustomerDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <CustomerSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main content */}
      <main
        className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
          collapsed ? "ml-16" : "ml-64"
        }`}
      >
        <Routes>
          <Route index element={<Orders />} /> {/* Default page */}
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
          <Route path="recommended" element={<Recommended />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="help-contact" element={<HelpContact />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  );
};

export default CustomerDashboard;

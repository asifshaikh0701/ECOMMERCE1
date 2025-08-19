// import React from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLeaf } from "react-icons/fa";

// const WhyUs = () => {
//   const features = [
//     {
//       title: "Fresh & Local",
//       description: "Directly sourced from nearby farms. Delivered within hours.",
//       icon: "🌿",
//       gradient: "from-green-300 to-green-500",
//     },
//     {
//       title: "Farmer First",
//       description: "Every purchase directly supports the grower, not middlemen.",
//       icon: "🧑‍🌾",
//       gradient: "from-yellow-300 to-yellow-500",
//     },
//     {
//       title: "Eco Friendly",
//       description: "Minimal waste, compostable packaging, and nature-safe transport.",
//       icon: "🌍",
//       gradient: "from-blue-300 to-green-400",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden">
//       {/* Floating background shapes */}
//       <motion.div
//         className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
//         animate={{ y: [0, 30, 0] }}
//         transition={{ duration: 6, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
//         animate={{ y: [0, -30, 0] }}
//         transition={{ duration: 5, repeat: Infinity }}
//       />

//       {/* Why Us Section */}
//       <section className="py-24 px-6 bg-gradient-to-br from-[#fef9f6] via-[#f0fdf4] to-[#e0f7fa]">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2
//             className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Why Choose Us?
//           </motion.h2>

//           <motion.p
//             className="text-gray-600 mb-16 text-lg max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             We’re building the future of food: fresher, fairer, and far more sustainable.
//           </motion.p>

//           {/* Grid of Features */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 relative"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.2 }}
//               >
//                 {/* Gradient Floating Icon */}
//                 <div
//                   className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl text-white shadow-lg absolute -top-7 left-6`}
//                 >
//                   {feature.icon}
//                 </div>

//                 <div className="mt-8 text-left">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
//                   <p className="text-gray-600 text-sm">{feature.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 px-6 bg-gradient-to-br from-green-100 via-green-50 to-blue-50 relative">
//         <motion.div
//           className="absolute -top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           We’re here for you!
//         </motion.div>

//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>

//           {/* Contact Info */}
//           <div className="grid sm:grid-cols-3 gap-8">
//             <motion.div
//               className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaPhoneAlt className="text-green-500 text-3xl mb-3" />
//               <p className="text-gray-700">+91 98765 43210</p>
//             </motion.div>

//             <motion.div
//               className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaEnvelope className="text-blue-500 text-3xl mb-3" />
//               <p className="text-gray-700">support@freshfarm.com</p>
//             </motion.div>

//             <motion.div
//               className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <FaMapMarkerAlt className="text-red-500 text-3xl mb-3" />
//               <p className="text-gray-700">Pune, Maharashtra</p>
//             </motion.div>
//           </div>

//           {/* Scrolling Marquee */}
//           <motion.div
//             className="mt-10 bg-green-200 py-3 rounded-full text-green-900 font-medium"
//             animate={{ x: ["100%", "-100%"] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//           >
//             🌿 Fresh from farms | 🚚 Free Delivery | 💚 100% Natural & Chemical Free
//           </motion.div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default WhyUs;



import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const WhyUs = () => {
  const features = [
    {
      title: "Fresh & Local",
      description: "Directly sourced from nearby farms. Delivered within hours.",
      icon: "🌿",
      gradient: "from-green-300 to-green-500",
    },
    {
      title: "Farmer First",
      description: "Every purchase directly supports the grower, not middlemen.",
      icon: "🧑‍🌾",
      gradient: "from-yellow-300 to-yellow-500",
    },
    {
      title: "Eco Friendly",
      description: "Minimal waste, compostable packaging, and nature-safe transport.",
      icon: "🌍",
      gradient: "from-blue-300 to-green-400",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Floating Leaves Animation */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-300 text-3xl"
          style={{ top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%` }}
          animate={{ y: ["0%", "100%"], rotate: [0, 360] }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
        >
          🍃
        </motion.div>
      ))}

      {/* Floating background shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Why Us Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#fef9f6] via-[#f0fdf4] to-[#e0f7fa] relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-16 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We’re building the future of food: fresher, fairer, and far more sustainable.
          </motion.p>

          {/* Grid of Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                {/* Orbiting Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl text-white shadow-lg absolute -top-7 left-6`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  {feature.icon}
                </motion.div>

                <div className="mt-8 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-100 via-green-50 to-blue-50 relative z-10">
        <motion.div
          className="absolute -top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
          animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 10px #22c55e", "0 0 20px #22c55e", "0 0 10px #22c55e"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          We’re here for you!
        </motion.div>

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8">
            {[{ icon: <FaPhoneAlt className="text-green-500 text-3xl mb-3" />, text: "+91 98765 43210" },
              { icon: <FaEnvelope className="text-blue-500 text-3xl mb-3" />, text: "support@AgroConnect.com" },
              { icon: <FaMapMarkerAlt className="text-red-500 text-3xl mb-3" />, text: "Pune, Maharashtra" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                {/* Ripple Effect */}
                <motion.span
                  className="absolute w-40 h-40 bg-green-200 rounded-full opacity-20"
                  animate={{ scale: [0, 1.5], opacity: [0.4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {item.icon}
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Scrolling Marquee */}
          <motion.div
            className="mt-10 bg-green-200 py-3 rounded-full text-green-900 font-medium whitespace-nowrap overflow-hidden"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            🌿 Fresh from farms | 🚚 Free Delivery | 💚 100% Natural & Chemical Free
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default WhyUs;

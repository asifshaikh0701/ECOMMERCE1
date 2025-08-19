// import React, { useState } from "react";
// import axios from "axios";

// const AddProduct = () => {
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     price: "",
//     stock: "",
//     category: "",
//     image: "",
//   });

//   const [message, setMessage] = useState("");
//   const token = localStorage.getItem("token");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const dataToSend = {
//         ...form,
//         price: Number(form.price),
//         stock: form.stock ? Number(form.stock) : 0,
//       };

//       await axios.post(
//         "http://localhost:5000/api/products/add-product",
//         dataToSend,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // ✅ Fixed string interpolation
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setMessage("✅ Product added successfully!");

//       // Reset form
//       setForm({
//         name: "",
//         description: "",
//         price: "",
//         stock: "",
//         category: "",
//         image: "",
//       });
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Failed to add product. Please check your token/role.");
//     }
//   };

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">➕ Add Product</h2>

//       <form
//         onSubmit={handleSubmit}
//         className="grid gap-3 bg-white shadow p-4 rounded"
//       >
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Product Name"
//           className="border p-2"
//           required
//         />
//         <input
//           name="description"
//           value={form.description}
//           onChange={handleChange}
//           placeholder="Description"
//           className="border p-2"
//         />
//         <input
//           name="price"
//           type="number"
//           value={form.price}
//           onChange={handleChange}
//           placeholder="Price"
//           className="border p-2"
//           required
//         />
//         <input
//           name="stock"
//           type="number"
//           value={form.stock}
//           onChange={handleChange}
//           placeholder="Stock"
//           className="border p-2"
//         />
//         <input
//           name="category"
//           value={form.category}
//           onChange={handleChange}
//           placeholder="Category"
//           className="border p-2"
//           required
//         />
//         <input
//           name="image"
//           value={form.image}
//           onChange={handleChange}
//           placeholder="Image URL"
//           className="border p-2"
//         />
//         <button
//           type="submit"
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Add Product
//         </button>
//       </form>

//       {message && (
//         <p className="text-center mt-3 text-blue-600 font-semibold">{message}</p>
//       )}
//     </div>
//   );
// };

// export default AddProduct;




import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });

  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        ...form,
        price: Number(form.price),
        stock: form.stock ? Number(form.stock) : 0,
      };

      await axios.post(
        "http://localhost:5000/api/products/add-product",
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessage("✅ Product added successfully!");

      // Reset form
      setForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        image: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add product. Please check your token/role.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-gray-200 to-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          ➕ Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            rows="3"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Add Product
          </button>
        </form>

        {message && (
          <p className="text-center mt-5 font-semibold text-green-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddProduct;

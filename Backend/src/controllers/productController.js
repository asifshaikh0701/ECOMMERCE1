import Product from "../models/Product.js";

// ✅ Add Product
export const addProduct = async (req, res) => {
  const { name, description, price, stock, category, image } = req.body;

  if (!name || !price || !category || !stock || !description || !image) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,
      image,
      createdBy: req.user.id,
    });

    res.status(201).json({ msg: "Product added successfully", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get all products (public)
export const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category
      ? { category: { $regex: new RegExp(category, "i") } }
      : {};

    const products = await Product.find(filter).populate("createdBy", "name email");

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get seller's own products
export const getSellerProducts = async (req, res) => {
  try {
    const products = await Product.find({ createdBy: req.user.id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    if (product.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({ msg: "Product updated successfully", product: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    if (product.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await product.deleteOne();
    res.json({ msg: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



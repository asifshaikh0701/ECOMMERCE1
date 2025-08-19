import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


// Helper: Create JWT
const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};


//  Register Controller

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashed, role });

    const { password: pwd, ...userData } = newUser._doc;

    res.status(201).json({
      msg: "Registered successfully",
      user: userData,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ✅ Login Controller

// ✅ Login Controller (fixed version)

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = generateToken(user._id, user.role);

    const { password: _, ...userData } = user._doc;

    res.json({
      msg: "Login successful",
      token,
      user: userData,
      role: user.role, // ✅ Use actual role from user
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

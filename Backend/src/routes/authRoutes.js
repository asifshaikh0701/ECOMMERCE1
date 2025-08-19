// import express from "express";
// import { register, login } from "../controllers/authController.js";

// const router = express.Router();

// // Routes for authentication
// router.post("/register", register); // POST /api/auth/register
// router.post("/login", login);       // POST /api/auth/login

// export default router;


import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;

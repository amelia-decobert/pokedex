// Import Router
import { Router } from 'express';
// Import auth controller
import { login, register } from "../controllers/auth.controller.js";

// Create router instance
const router = Router();

// Define a route to register
router.post("/register", register);
// Define a route to log in
router.post("/login", login);
// // Define a route to log out
// router.post("/logout", logout);

export default router;
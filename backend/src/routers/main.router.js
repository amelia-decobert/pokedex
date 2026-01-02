// Import express module
import express from "express";
// Import main controller
import { getHomePage } from "../controllers/main.controller.js";

// Create router instance
const router = express.Router();

// Define route to get home page
router.get("/", getHomePage);

export default router;
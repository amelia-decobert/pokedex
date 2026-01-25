// Import Router
import { Router } from 'express';
// Import type controller
import { getAll, getById } from "../controllers/type.controller.js";

// Create router instance
const router = Router();

// Define route to get all
router.get("/", getAll);
// Define route to get by id
router.get("/:id", getById);

export default router;
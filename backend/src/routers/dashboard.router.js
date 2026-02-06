// Import Router
import { Router } from 'express';
// Import dashboard controller
import { getMyDashboard } from "../controllers/dashboard.controller.js";
import { authRegister } from '../middlewares/auth.middleware.js';

// Create router instance
const router = Router();

// Define route to get dashboard
router.get("/", authRegister, getMyDashboard);

export default router;
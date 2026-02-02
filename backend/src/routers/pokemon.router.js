// Import Router
import { Router } from 'express';
// Import pokemon controller
import { getAll, getById, updateById, deleteById } from "../controllers/pokemon.controller.js";
// Import pokemon middleware
import { validatePokemonUpdate } from "../middlewares/pokemon.middleware.js";
// Create router instance
const router = Router();

// Define route to get all
router.get("/", getAll);
// Define route to get by id
router.get("/:id", getById);
// Define route to update by id
router.patch("/:id", validatePokemonUpdate, updateById);
// Define route to delete by id
router.delete("/:id", deleteById);

export default router;
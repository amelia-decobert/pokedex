// Import Router
import { Router } from 'express';
// Import team controller
import { getAll, getById, create, updateById, deleteById, addPokemonToTeam, deletePokemonFromTeam } from "../controllers/team.controller.js";
// Import team middleware
import { validateTeamCreation, validateTeamUpdate } from "../middlewares/team.middleware.js";
// Import function validateId
import { validateId } from "../utils/common.js";
// Import auth middleware
import { authRegister } from '../middlewares/auth.middleware.js';
// Create router instance
const router = Router();

// Define route to get all
router.get("/", getAll);
// Define route to get by id
router.get("/:id", validateId, getById);
// Define route to create a new one
router.post("/", authRegister, validateTeamCreation, create);
// Define route to update by id
router.patch("/:id", authRegister, validateTeamUpdate,updateById);
// Define route to delete by id
router.delete("/:id", authRegister, deleteById);
// Define route to add pokemon to team
router.post("/:id/pokemons", authRegister, addPokemonToTeam)
// Define route to delete pokemon from team
router.delete("/:id/pokemons/:pokemonId", authRegister, deletePokemonFromTeam)

export default router;
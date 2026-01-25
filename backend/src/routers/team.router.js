// Import Router
import { Router } from 'express';
// Import team controller
import { getAll, getById, create, updateById, deleteById, addPokemonToTeam, deletePokemonFromTeam } from "../controllers/team.controller.js";
// Import team middleware
import { validateTeamCreation, validateTeamUpdate } from "../middlewares/team.middleware.js";
// Import function validateId
import { validateId } from "../utils/common.js";
// Create router instance
const router = Router();

// Define route to get all
router.get("/", getAll);
// Define route to get by id
router.get("/:id", validateId, getById);
// Define route to create a new one
router.post("/", validateTeamCreation, create);
// Define route to update by id
router.patch("/:id", validateTeamUpdate,updateById);
// Define route to delete by id
router.delete("/:id", deleteById);
// Define route to add pokemon to team
router.post("/:id/pokemons", addPokemonToTeam)
// Define route to delete pokemon from team
router.delete("/:id/pokemons/:pokemonId", deletePokemonFromTeam)

export default router;
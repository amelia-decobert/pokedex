// Import express module
import express from 'express';

// Import team router
import teamRouter from "./team.router.js";
// Import pokemon router
import pokemonRouter from "./pokemon.router.js";
// Import type router
import typeRouter from "./type.router.js";
// Import main router
import mainRouter from "./main.router.js";

// Create router instance
const router = express.Router();

// Use main router
router.use("/", mainRouter);
// Use team router
router.use("/teams", teamRouter);
// Use pokemon router
router.use("/pokemon", pokemonRouter);
// Use type router
router.use("/types", typeRouter);


export default router;
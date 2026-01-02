// Import Joi module
import Joi from "joi";
// Import checkbody function
import { checkBody } from "../utils/common.js";

// Create and export function to validate pokemon update
export function validatePokemonUpdate(req, res, next) {
    const updatePokemon = Joi.object({
            name: Joi.string(),
            hp: Joi.number(),
            atk: Joi.number(),
            def:Joi.number(),
            atk_spe: Joi.number(),
            def_spe: Joi.number(),
            speed: Joi.number()
    });
    checkBody(updatePokemon, req.body, res, next);
}
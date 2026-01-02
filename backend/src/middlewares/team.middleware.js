// Import Joi module
import Joi from "joi";

// Import checkbody function
import { checkBody } from "../utils/common.js";

// Create and export function to validate team creation
export function validateTeamCreation(req, res, next) {
    const createTeam = Joi.object({
        name: Joi.string().required(),
        description: Joi.string()
    });
    checkBody(createTeam, req.body, res, next);
};

// Create and export functino to validate team update
export function validateTeamUpdate(req, res, next) {
    const updateTeam = Joi.object({
        name: Joi.string(),
        description: Joi.string()
    });
    checkBody(updateTeam, req.body, res, next);
}
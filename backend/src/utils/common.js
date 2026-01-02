// Import Status Codes
import { StatusCodes } from "http-status-codes";

// Create and export function to check body
export function checkBody(schema, body, res, next) {
    const validation = schema.validate(body);
    if (validation.error) {
        res.status(StatusCodes.BAD_REQUEST).send(validation.error);
        return;
    }
    next();
};

// Create and export function to validate id
export function validateId(req, res, next) {
    const validId = parseInt(req.params.id);
    if (!Number.isInteger(validId)) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 400 });
        return;
    }
    next();
}
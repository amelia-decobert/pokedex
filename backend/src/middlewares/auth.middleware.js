// Import Joi module
import Joi from "joi";
// Import checkboy function
import { checkBody } from "../utils/common.js";

// Create and export function to validate user creation
export function validateUserCreation(req, res, next) {
    const createUser = Joi.object({
        username: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        confirmPassword: Joi.string().min(8).required()
    });
    checkBody(createUser, req.body, res, next);
};

// Create and export function to validate user login
export function validateUserLogin(req, res, next) {
    const loginUser = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    });
    checkBody(loginUser, req.body, res, next);
};

export function authRegister(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided"})
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Invalid token"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = { id: decoded.id };

        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token"})
    }
}
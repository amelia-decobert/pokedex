// Import user model
import { User } from "../models/User.js"
// Import bcrypt
import bcrypt from "bcrypt"
// Import jwt
import jwt from "jsonwebtoken"

export async function register(req, res) {
    const { username, email, password, confirmPassword } = req.body;

    // If passwords do not match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Les mots de passe ne correspondent pas"})
    }

    // Check if user already exists by its email
    const existingUser = await User.findOne({
        where: { email }
    });

    // If already exists
    if (existingUser) {
        return res.status(400).json({ message: "Cette adresse e-mail est déjà utilisée"})
    }

    // Hash password with salt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
    });

    res.status(201).json({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
    })
}

export async function login(req, res) {
    const { email, password } = req.body;

    // Get user with its email
    const user = await User.findOne({
        where: { email }
    });

    // If user does not exists
    if (!user) {
        return res.status(401).json({ message: "Données invalides" })
    }

    // Check passwords
    const isMatch = await bcrypt.compare(password, user.password);

    // If passwords do not match
    if (!isMatch) {
        return res.status(401).json({ message: "Données invalides" })
    }

    // Create token
    // JWT_SECRET signs the token; same secret is required later to verify the token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
}
// console.log("JWT SECRET: ", process.env.JWT_SECRET);

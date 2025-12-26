// Import Type Model from associations
import { Type } from "../models/associations.js";

// Create and export async function to get all
export async function getAll(req, res) {
    const types = await Type.findAll();
    res.json(types)
};

// Create and export async function to get one type and its pokemon
export async function getById(req, res) {
    const type = await Type.findByPk(req.params.id, {
        include: "pokemons"
    });
    res.json(type)
}
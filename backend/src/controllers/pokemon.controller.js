// Import team Model from associations
import { Pokemon } from "../models/associations.js";

// Create and export async function to get all
export async function getAll(req, res) {
    const pokemons = await Pokemon.findAll();
    res.json(pokemons)
};

// Create and export async function to get one and its types
export async function getById(req, res) {
    const pokemon = await Pokemon.findByPk(req.params.id, {
        include: "types"
    });
    res.json(pokemon)
};

// Create and export async function to update pokemon
export async function updateById(req, res) {
    const pokemonUpdated = await Pokemon.update(req.body, {
        where: { id: req.params.id }
    });
    res.json(pokemonUpdated)
};

// Create and export async function to delete pokemon
export async function deleteById(req, res) {
    const pokemonDeleted = await Pokemon.destroy({
        where: { id: req.params.id }
    });
    res.json(pokemonDeleted)
}
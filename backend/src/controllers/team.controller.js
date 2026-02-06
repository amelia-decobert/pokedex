// Import team Model from associations
import { Team, Pokemon, TeamPokemon } from "../models/associations.js";

// Create and export async function to get all
export async function getAll(req, res) {
    const teams = await Team.findAll();
    res.json(teams)
};

// Create and export async function to get one team and its pokemons
export async function getById(req, res) {
    // Do not forget to define params in method
    const team = await Team.findByPk(req.params.id, {
        include: "pokemons"
    });
    res.json(team)
};

// Create and export async function to post new team
export async function create(req, res) {
    const { name, description } = req.body;

    const newTeam = await Team.create({
        name,
        description,
        user_id: req.user.id
    });
    res.json(newTeam)
};

// Create and export async function to update team
export async function updateById(req, res) {
    const teamUpdated = await Team.update(req.body, {
        where: { id: req.params.id }
    });
    res.json(teamUpdated)
};

// Create and export async function to delete team
export async function deleteById(req, res) {
    const teamDeleted = await Team.destroy({
        where: { id: req.params.id }
    });
    res.json(teamDeleted)
}

// Create and export async function to add pokemon to team
export async function addPokemonToTeam(req, res) {
    const { pokemonId } = req.body;

    const teamNewPokemon = await TeamPokemon.create({
        team_id: req.params.id,
        pokemon_id: pokemonId
    });
    res.json(teamNewPokemon)
};

// Create and export async function to delete pokemon from team
export async function deletePokemonFromTeam(req, res) {
    const { id: teamId, pokemonId } = req.params;

    const teamLessPokemon = await TeamPokemon.destroy({
        where: {
            team_id: teamId,
            pokemon_id: pokemonId
        }
    });
    res.json(teamLessPokemon)
}
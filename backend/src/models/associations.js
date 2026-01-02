// Import all models
import { Pokemon } from "./Pokemon.js";
import { Team } from "./Team.js";
import { Type } from "./Type.js";
import { TeamPokemon } from "./TeamPokemon.js";
import { PokemonType } from "./PokemonType.js";
import { sequelize } from "../database/sequelize-client.js";

// Define associations
// Pokemon N - N Type
Pokemon.belongsToMany(Type, {
    through: PokemonType,
    foreignKey: "pokemon_id",
    otherKey: "type_id",
    as: "types"
});

// Type N - N Pokemon
Type.belongsToMany(Pokemon, {
    through: PokemonType,
    foreignKey: "type_id",
    otherKey: "pokemon_id",
    as: "pokemons"
});
// Team N - N Pokemon
Team.belongsToMany(Pokemon, {
    through: TeamPokemon,
    foreignKey: "team_id",
    otherKey: "pokemon_id",
    as: "pokemons"
});

// Pokemon N - N Team
Pokemon.belongsToMany(Team, {
    through: TeamPokemon,
    foreignKey: "pokemon_id",
    otherKey: "team_id",
    as: "teams"
})

// Export all Models and associations
export {
    Pokemon,
    Team,
    TeamPokemon,
    Type,
    PokemonType,
    sequelize
}
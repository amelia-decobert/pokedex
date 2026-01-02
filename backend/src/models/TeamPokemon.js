// Import sequelize instance from sequelize-client
import { sequelize } from "../database/sequelize-client.js";
// Import DataTypes and Model classes from sequelize
import { DataTypes, Model } from "sequelize";

// Define and export TeamPokemon Model extending Sequelize Model class
export class TeamPokemon extends Model { }
// Initialize Team Model with its attributes and options
TeamPokemon.init({
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pokemon_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "team_pokemon",
}
)
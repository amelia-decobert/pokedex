// Import sequelize instance from sequelize-client
import { sequelize } from "../database/sequelize-client.js";
// Import DataTypes and Model classes from sequelize
import { DataTypes, Model } from "sequelize";

// Define and export PokemonType Model extending Sequelize Model class
export class PokemonType extends Model { }
// Initialize PokemonType Model with its attributes and options
PokemonType.init({
    type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pokemon_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "pokemon_type",
}
)
// Import sequelize instance from sequelize-client
import { sequelize } from "../database/sequelize-client.js";
// Import DataTypes and Model classes from sequelize
import { DataTypes, Model } from "sequelize";

// Define and export Pokemon Model extending Sequelize Model class
export class Pokemon extends Model { }
// Initialize Pokemon Model with its attributes and options
Pokemon.init({
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    hp: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    atk: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    def: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    atk_spe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    def_spe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    speed: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "pokemon"
})
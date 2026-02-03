// Import sequelize istance from sequelize-client
import { sequelize } from "../database/sequelize-client.js";
// Import DataTypes and Model classes from sequelize
import { DataTypes, Model } from "sequelize";

// Define and export User Model extending Sequelize Model class
export class User extends Model { }
// Initialize User Model with its attributes and options
User.init({
    username: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
}, {
    sequelize,
    tableName: "user"
})

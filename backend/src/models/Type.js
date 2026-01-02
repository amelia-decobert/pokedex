// Import sequelize instance from sequelize-client
import { sequelize } from "../database/sequelize-client.js";
// Import DataTypes and Model classes from sequelize
import { DataTypes, Model } from "sequelize";

// Define and export Type Model extending Sequelize Model class
export class Type extends Model { }
// Initialize Type Model with its attributes and options
Type.init({
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(7),
        allowNull: false
    }
}, {
    sequelize,
    tableName: "type"
}
)
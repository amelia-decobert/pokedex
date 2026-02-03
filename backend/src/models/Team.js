// Import sequelize instance from sequelize-client
import { sequelize } from "../database/sequelize-client.js";
// Import DataTypes and Model classes from sequelize
import { DataTypes, Model } from "sequelize";

// Define and export Team Model extending Sequelize Model class
export class Team extends Model { }
// Initialize Team Model with its attributes and options
Team.init({
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255)
    },
    user_id: {
        type: DataTypes.INTEGER(),
        allowNull: false
    }
}, {
    sequelize,
    tableName: "team"
}
)
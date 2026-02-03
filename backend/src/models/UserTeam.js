// Import sequelize instance from sequelize-client
import { sequelize } from "../database/sequelize-client.js";
// Import DataTypes and Model classes from sequelize
import { DataTypes, Model } from "sequelize";

// Define and export UserTeam Model extending Sequelize Model class
export class UserTeam extends Model { }
// Initialize UserTeam Model with its attributes and options
UserTeam.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "user_team",
}
)
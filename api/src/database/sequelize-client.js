// Import and config dotenv
import "dotenv/config";
// Import sequelize module
import { Sequelize } from "sequelize";

// Create and export sequelize instance with DB config (cf .env.example)
export const sequelize = new Sequelize(process.env.PG_URL, {
        // Specify dialect
        dialect: "postgres",
        // Configure define object with convention for timestamp fields
        define: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
        // Disable logging for cleaner output
        logging: false
    }
);

// Test DB authentication with try/catch block
try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully!");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
// Test config script with "node src/models/sequelize-client.js" command
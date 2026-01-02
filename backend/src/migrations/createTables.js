// Import sequelize instance
import { sequelize } from "../models/sequelize-client.js";
// Import associations from Models
import "../models/associations.js";

console.log("Deleting existing tables...");
// Drop existing tables if they exist
await sequelize.drop();
console.log("Existing tables deleted.");

console.log("Creating tables...");
// Sync all models with DB to create tables
await sequelize.sync();
console.log("Tables created successfully!");

// Check migration result and show all DB tables
console.log("DB Tables :", await sequelize.getQueryInterface().showAllTables());

console.log("Migration completed!");
// Close the sequelize connection
await sequelize.close()
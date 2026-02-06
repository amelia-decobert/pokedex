import { Team } from "../models/associations.js";

// Create and export async function to get all
export async function getMyDashboard(req, res) {
    const teams = await Team.findAll();
    res.json(teams)
};

// Import express module
import express from 'express';
// Import and config dotenv to manage environment variables
import "dotenv/config";
// Import api router
import { router as apiRouter } from "./routers/router.js";
import cors from "cors";

// Set up PORT and create express instance
const PORT = process.env.PORT || 3000;
const app = express();

// Define view engine template ejs and folder
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));

app.use("/api", apiRouter);

// Define a listener on the specified PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Import express module
import express from 'express';
// Import and config dotenv to manage environment variables
import "dotenv/config";
// Import router
import router from "./routers/router.js";

// Set up PORT and create express instance
const PORT = process.env.PORT || 3000;
const app = express();

// Define view engine template ejs and folder
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("../public"));
app.use(express.json());
app.use(router);

// Define a listener on the specified PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require("express");

// Create an Express app
const app = express();

// Middleware that runs for every request
app.use((req, res, next) => {
    console.log("middleware");
    next();
});

// Route for the root ("/") endpoint
app.get('/', (req, res) => {
    res.send("Express Javascript First");
});

// Route for the "/about" endpoint
app.get("/about", (req, res) => {
    res.send("this is about section");
});

// Listen on port 4000
app.listen(4000);

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const usermodel = require("./models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.render("index");
});

// Create user
app.post("/create", async (req, res) => {
    let { username, email, password, age } = req.body;

    let salt = await bcrypt.genSalt(8);
    let hash = await bcrypt.hash(password, salt);

    let user = await usermodel.create({ username, email, password: hash, age });

    let token = jwt.sign({ email: user.email }, "secretcookie");
    res.cookie("token", token);

    res.send(user);
});

// Login page
app.get("/login", (req, res) => {
    res.render("login");
});

// Login user
app.post("/login", async (req, res) => {
    let user = await usermodel.findOne({ email: req.body.email });

    if (!user) {
        return res.send("Something went wrong");
    }

    let isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
        let token = jwt.sign({ email: user.email }, "secretcookie");
        res.cookie("token", token);
        res.send("Login successful");
    } else {
        res.send("Invalid credentials");
    }
});

// Logout user
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.send("Logged out successfully");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

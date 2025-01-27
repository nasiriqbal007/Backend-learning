const express = require("express");
const app = express();
const path = require("path")

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/read", (req, res) => {
    res.render("read")
})
app.post("/create", (req, res) => {
    res.render("read")
})
app.listen(3000)
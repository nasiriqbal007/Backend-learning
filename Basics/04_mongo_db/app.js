const express = require("express");
const app = express();
const path = require("path");
const usermodel = require("./models/user");

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index")
});

//Read all user
app.get("/read", async (req, res) => {
    let users = await usermodel.find();
    res.render("read", { users })
});

//Create a user
app.post("/create", async (req, res) => {
    const { name, email, image } = req.body;
    let user = await usermodel.create({
        name,
        email,
        image,
    });
    res.redirect("/read")

});

//get user by id
app.get("/update/:id", async (req, res) => {

    let user = await usermodel.findOne({ _id: req.params.id });
    res.render("update", { user })

});

//update a user by id
app.post("/update/:id", async (req, res) => {
    const { name, email, image } = req.body;
    let user = await usermodel.findOneAndUpdate({ _id: req.params.id }, {
        name,
        email,
        image,

    }, {
        new: true
    });
    res.redirect("/read",)

});

//delete user by id
app.get("/delete/:id", async (req, res) => {
    let user = await usermodel.findByIdAndDelete(req.params.id);
    res.redirect("/read");
});


app.listen(3000);
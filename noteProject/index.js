const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    if (files) {
      res.render("index", { files: files });
    } else console.log(err);
  });
});
app.get("/files/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", { filename: req.params.filename, filedata: filedata });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.description,
    (err) => {
      if (!err) {
        res.redirect("/");
      } else console.log(err);
    }
  );
});

app.get("/edit/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("edit", { filename: req.params.filename, filedata: filedata });
  });
});

app.post("/edit", (req, res) => {
  const previousFile = req.body.previous_file;
  const newFilename = req.body.new_filename.split(" ").join("") + ".txt";
  const newFiledata = req.body.new_filedata;

  fs.rename(`./files/${previousFile}`, `./files/${newFilename}`, (err) => {
    if (err) {
      console.log("Error renaming file:", err);
      return res.status(500).send("Failed to rename file");
    }

    fs.writeFile(`./files/${newFilename}`, newFiledata, (err) => {
      if (err) {
        console.log("Error writing file data:", err);
      }

      res.redirect("/");
    });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

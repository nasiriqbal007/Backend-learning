const express = require("express");
const app = express();
const usermodel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Welcome to the User Management System");
});

// Create a single user
app.get("/create", async (req, res) => {
  const user = await usermodel.create({
    name: "Nasir",
    email: "nasir@mail.com",
    age: 22,
  });
  res.send(user);
});

// Add multiple users
app.get("/add-multiple", async (req, res) => {
  const users = await usermodel.insertMany([
    { name: "Ali", email: "ali@mail.com", age: 25 },
    { name: "Ahmed", email: "ahmed@mail.com", age: 30 },
    { name: "Ayesha", email: "ayesha@mail.com", age: 28 },
  ]);
  res.send(users);
});

// Update user (updateOne)
app.get("/update", async (req, res) => {
  const result = await usermodel.updateOne(
    { name: "Ahmed" },
    { $set: { age: 17 } }
  );
  res.send(result);
});

// Update and return updated user (findOneAndUpdate)
app.get("/update-u", async (req, res) => {
  const updateUser = await usermodel.findOneAndUpdate(
    { name: "Nasir" },
    { age: 27 },
    { new: true }
  );
  res.send(updateUser);
});

// Read all users
app.get("/read", async (req, res) => {
  const readUser = await usermodel.find();
  res.send(readUser);
});

// Read a specific user
app.get("/read-r", async (req, res) => {
  const readUser = await usermodel.findOne({ name: "Nasir" });
  res.send(readUser);
});

// Delete a specific user (deleteOne)
app.get("/delete", async (req, res) => {
  const deleteUser = await usermodel.deleteOne({ name: "Ayesha" });
  res.send(deleteUser);
});

// Delete and return deleted user (findOneAndDelete)
app.get("/delete-d", async (req, res) => {
  const deleteUser = await usermodel.findOneAndDelete({ name: "Ahmed" });
  res.send(deleteUser);
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

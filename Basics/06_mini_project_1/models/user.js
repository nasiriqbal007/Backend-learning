const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String,
  email: String,
  age: Number,

  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
const mongooes = require("mongoose");

const postSchema = mongooes.Schema({
    user: {
        type: mongooes.Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,

    },


    date: {
        type: Date,
        default: Date.now,
    },

});
module.exports = mongooes.model("Post", postSchema);

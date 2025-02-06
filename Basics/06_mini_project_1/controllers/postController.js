const postModel = require('../models/post');
const userModel = require('../models/user');

const createPost = async (req, res) => {
    let user = await userModel.findById(req.user.userId);
    let { title, content } = req.body;
    let newPost = await postModel.create({
        title: title,
        content: content,
        user: user._id
    });
    user.posts.push(newPost);
    await user.save();
    res.redirect('/profile');

};

const deletePost = async (req, res) => {
    let postId = req.params.id;
    const user = await userModel.findById(req.user.userId);
    user.posts.pull(postId);
    await user.save();
    await postModel.findByIdAndDelete(postId);
    res.redirect('/profile');
};

const updatePost = async (req, res) => {
    let postId = req.params.id;
    let { title, content } = req.body;
    await postModel.findByIdAndUpdate(postId, { title, content });
    res.redirect('/profile');
};

const getUpdatePost = async (req, res) => {
    let postId = req.params.id;
    let post = await postModel.findById(postId);
    if (!post) {
        return res.status(404).send('Post not found');
    } else {
        res.render('update', { post });
    }
};

module.exports = {
    createPost,
    deletePost,
    updatePost,
    getUpdatePost
};
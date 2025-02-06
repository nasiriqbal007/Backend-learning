const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name, username, email, password, age, } = req.body;

    // Check if the user already exists
    let existingUser = await userModel.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.status(400).send('User already exists');
    }

    // Hash the password before saving to the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await userModel.create({
        name,
        username,
        email,
        password: hashedPassword,
        age,

    });

    // Generate JWT token and set it as a cookie
    let userToken = jwt.sign({ email: email, userId: user._id }, 'secretkey');
    res.cookie('jwt', userToken);
    res.redirect('/profile');
};

const login = async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    let user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).send('Invalid credentials');
    }

    // Compare the entered password with the hashed password
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send('Invalid credentials');
    }

    // Generate JWT token and set it as a cookie
    let userToken = jwt.sign({ email: email, userId: user._id }, 'secretkey');
    res.cookie('jwt', userToken);
    res.redirect('/profile');
};

const logout = (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/login');
};

module.exports = {
    register,
    login,
    logout
};
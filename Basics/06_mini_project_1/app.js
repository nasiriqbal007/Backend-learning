// Dependencies
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

connectDB();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
});

app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/userRoutes'));
app.use('/', require('./routes/postRoutes'));

// Server setup
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
const jwt = require('jsonwebtoken');

let auth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        } else {
            req.user = decoded;
            next();
        }
    });
};

module.exports = auth;
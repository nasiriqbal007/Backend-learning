const userModel = require('../models/user');

const getProfile = async (req, res) => {

    const user = await userModel.findById(req.user.userId).populate('posts');
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.render('profile', { user });


}



module.exports = { getProfile };

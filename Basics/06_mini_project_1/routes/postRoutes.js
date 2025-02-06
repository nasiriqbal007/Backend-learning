const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/createPost', authMiddleware, postController.createPost);
router.post('/deletePost/:id', authMiddleware, postController.deletePost);
router.get('/updatePost/:id', authMiddleware, postController.getUpdatePost);
router.post('/updatePost/:id', authMiddleware, postController.updatePost);

module.exports = router;
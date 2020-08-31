const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/story', userController.getAllPosts);
router.get('/story/:id', userController.viewPost);
router.post('/story/:id', userController.likePost);


module.exports = router;
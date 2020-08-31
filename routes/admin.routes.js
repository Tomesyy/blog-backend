const router = require('express').Router();
const adminController = require('../controllers/admin.controller');

router.post('/story', adminController.createPost);
router.put('/story/:id', adminController.updatePost);
router.delete('/story/:id', adminController.deletePost);

module.exports = router;
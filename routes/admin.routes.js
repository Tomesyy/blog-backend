const router = require('express').Router();
const adminController = require('../controllers/admin.controller');
const auth = require('../middlewares/auth');
const validator = require('../middlewares/validators/posts.validators');

router.post('/login', adminController.loginAdmin)
router.post('/story', auth.verifyAdmin, validator.createPost, adminController.createPost);
router.put('/story/:id', auth.verifyAdmin, validator.updatePost, adminController.updatePost);
router.delete('/story/:id', auth.verifyAdmin, adminController.deletePost);

module.exports = router;
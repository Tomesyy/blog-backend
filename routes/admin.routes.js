const router = require('express').Router();
const adminController = require('../controllers/admin.controller');
const auth = require('../middlewares/auth');

router.post('/login', adminController.loginAdmin)
router.post('/story', auth.verifyAdmin, adminController.createPost);
router.put('/story/:id', auth.verifyAdmin, adminController.updatePost);
router.delete('/story/:id', auth.verifyAdmin, adminController.deletePost);

module.exports = router;
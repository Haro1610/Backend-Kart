const router = require('express').Router();
const userController = require('./users.controller');

router.get('/users',userController.getAll);
//router.get('/users',userController.getOne);
router.post('/users',userController.create);
//router.delete('./users',userController.delete);
module.exports = router;
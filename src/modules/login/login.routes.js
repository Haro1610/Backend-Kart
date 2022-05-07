const router = require('express').Router();
const LogInController = require('./login.controller');



router.post('/Login',LogInController.updateOne);
//router.delete('./users',userController.delete);
module.exports = router;
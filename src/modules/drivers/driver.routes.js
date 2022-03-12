const router = require('express').Router();
const driversController = require('./drivers.controller');

router.get('/drivers',driversController.getAll);
//router.get('/users',userController.getOne);
router.post('/drivers',driversController.create);
//router.delete('./users',userController.delete);
module.exports = router;
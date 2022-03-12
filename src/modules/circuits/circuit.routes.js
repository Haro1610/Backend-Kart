const router = require('express').Router();
const circuitController = require('./circuits.controller');

router.get('/Circuits',circuitController.getAll);
//router.get('/users',userController.getOne);
router.post('/Circuits',circuitController.create);
//router.delete('./users',userController.delete);
module.exports = router;
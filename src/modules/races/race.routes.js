const router = require('express').Router();
const racesController = require('./races.controller');

router.get('/races',racesController.getAll);
//router.get('/users',userController.getOne);
router.post('/races',racesController.create);
//router.delete('./users',userController.delete);
module.exports = router;
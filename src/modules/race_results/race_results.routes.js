const router = require('express').Router();
const race_resultsController = require('./race_results.controller');

router.get('/race_results',race_resultsController.getAll);
//router.get('/users',userController.getOne);
router.post('/race_results',race_resultsController.create);
//router.delete('./users',userController.delete);
module.exports = router;
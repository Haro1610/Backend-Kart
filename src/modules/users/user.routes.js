const router = require('express').Router();
const userController = require('./users.controller');

router.get('/users',userController.getAll);

module.exports = router;
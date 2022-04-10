const router = require('express').Router();
const driversController = require('./drivers.controller');

/**
 * @swagger
 *   /api/Drivers:
 *     get:
 *       tags:
 *       - Drivers
 *       description: Get all drivers
 *       responses:
 *         200:
 *           description: Array with a list of channels
 */
router.get('/drivers',driversController.getAll);
/**
  * @swagger
  *   /api/Drivers/{id}:
  *     get:
  *       tags:
  *       - Drivers
  *       description: Get one Driver by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: Driver's unique ID
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
router.get('/drivers/:id',driversController.getOne);
  /**
  * @swagger
  *   /api/Drivers/:
  *     post:
  *       tags:
  *       - Drivers
  *       description: Create a Circuit
  *       parameters:
  *         - in: header
  *           name: name
  *           required: true
  *           description: Name of the Driver
  *         - in: header
  *           name: birthdate
  *           required: true
  *           description: The driver's birthdate
  *         - in: header
  *           name: number
  *           required: true
  *           description: driver's number
  *         - in: header
  *           name: picture
  *           required: true
  *           description: A picture of the Driver
  *       responses:
  *         200:
  *           description: Create a new database entry with a driver's info
  */

router.post('/drivers',driversController.create);
//router.delete('./users',userController.delete);
module.exports = router;
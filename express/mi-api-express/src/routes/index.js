// Este archivo configura las rutas de la aplicación utilizando el IndexController.

const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/index');
const controller = new IndexController();

router.get('/', controller.getIndex);
router.get('/colombia', controller.getColombiaInfo);

module.exports = router;
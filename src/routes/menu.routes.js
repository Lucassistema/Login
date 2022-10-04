const router = require('express').Router();

const controller = require('../controllers/menu.controller');

router.get('menu', controller.menu);

module.exports = router;

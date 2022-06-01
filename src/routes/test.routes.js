const { Router } = require('express');
const { testing, index, guardar } = require('../controllers/test.controllers')
const router = Router();


router.get('/', index);
router.post('/post', guardar);
router.get('/testing', testing);

module.exports = router; // ! Exporting created routes
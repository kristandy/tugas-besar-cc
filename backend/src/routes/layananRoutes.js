const express = require('express');
const router = express.Router();
const controller = require('../controllers/layananController');

router.get('/', controller.getAll);
router.get('/:id', controller.getId);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;

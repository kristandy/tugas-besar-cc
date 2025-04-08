const express = require('express');
const router = express.Router();
const hariKerjaController = require('../controllers/hariKerjaController');

router.get('/', hariKerjaController.getAll);
router.get('/:id', hariKerjaController.getId);

module.exports = router;

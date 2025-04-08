const express = require('express');
const router = express.Router();
const keahlianController = require('../controllers/keahlianController');

router.get('/', keahlianController.getAll);
router.get('/:id', keahlianController.getId);
router.post('/', keahlianController.create);
router.put('/:id', keahlianController.update);
router.delete('/:id', keahlianController.destroy);

module.exports = router;

const express = require("express");
const router = express.Router();
const terapisController = require("../controllers/terapis-controller");

router.get("/", terapisController.getAllTerapis);

router.get("/:id", terapisController.getTerapisById);

router.post("/", terapisController.createTerapis);

router.put("/:id", terapisController.updateTerapis);

router.delete("/:id", terapisController.deleteTerapis);

module.exports = router;

const express = require("express");
const router = express.Router();
const terapisController = require("../controllers/terapisController");

router.get("/", terapisController.getAll);

router.get("/:id", terapisController.getId);

router.post("/", terapisController.create);

router.put("/:id", terapisController.update);

router.delete("/:id", terapisController.destroy);

module.exports = router;

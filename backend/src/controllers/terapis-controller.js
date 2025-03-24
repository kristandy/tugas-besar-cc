const terapisService = require("../services/terapis-service");

const getAllTerapis = async (req, res, next) => {
  try {
    const terapis = await terapisService.getAllTerapis();
    res.status(200).json({
      status: "success",
      data: terapis,
    });
  } catch (error) {
    next(error);
  }
};

const getTerapisById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const terapis = await terapisService.getTerapisById(id);
    res.status(200).json({
      status: "success",
      data: terapis,
    });
  } catch (error) {
    next(error);
  }
};

const createTerapis = async (req, res, next) => {
  try {
    const terapisData = req.body;
    const newTerapis = await terapisService.createTerapis(terapisData);
    res.status(201).json({
      status: "success",
      data: newTerapis,
    });
  } catch (error) {
    next(error);
  }
};

const updateTerapis = async (req, res, next) => {
  try {
    const { id } = req.params;
    const terapisData = req.body;
    const updatedTerapis = await terapisService.updateTerapis(id, terapisData);
    res.status(200).json({
      status: "success",
      data: updatedTerapis,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTerapis = async (req, res, next) => {
  try {
    const { id } = req.params;
    await terapisService.deleteTerapis(id);
    res.status(200).json({
      status: "success",
      message: `Therapist with ID ${id} has been deleted`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTerapis,
  getTerapisById,
  createTerapis,
  updateTerapis,
  deleteTerapis,
};

const terapisModel = require("../models/terapisModel");

async function getAll(req, res) {
  const data = await terapisModel.getAllTerapis();
  res.json(data);
}

async function getId(req, res) {
  const id = req.params.id;
  const data = await terapisModel.getTerapisById(id);
  if (!data) {
    return res.status(404).json({ error: 'Terapis not found' });
  }
  res.json(data);
}

async function create(req, res) {
  const data = req.body;
  try {
    const created = await terapisModel.createTerapis(data);
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function update(req, res) {
  const id = req.params.id;
  const data = req.body;
  try {
    const updated = await terapisModel.updateTerapis(id, data);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res) {
  const id = req.params.id;
  try {
    const deleted = await terapisModel.deleteTerapis(id);
    res.json(deleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAll,
  getId,
  create,
  update,
  destroy,
};
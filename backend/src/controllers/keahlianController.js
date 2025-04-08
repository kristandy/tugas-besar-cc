const keahlianModel = require('../models/keahlianModel');

async function getAll(req, res) {
  const data = await keahlianModel.getAllKeahlian();
  res.json(data);
}

async function getId(req, res) {
  const { id } = req.params;
  const data = await keahlianModel.getKeahlianById(id);
  if (!data) return res.status(404).json({ message: 'Keahlian not found' });
  res.json(data);
}

async function create(req, res) {
  const { keahlian } = req.body;
  const newData = await keahlianModel.createKeahlian({ keahlian });
  res.status(201).json(newData);
}

async function update(req, res) {
  const { id } = req.params;
  const { keahlian } = req.body;
  try {
    const updated = await keahlianModel.updateKeahlian(id, { keahlian });
    res.json(updated);
  } catch (err) {
    res.status(404).json({ message: 'Keahlian not found' });
  }
}

async function destroy(req, res) {
  const { id } = req.params;
  try {
    await keahlianModel.deleteKeahlian(id);
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ message: 'Keahlian not found' });
  }
}

module.exports = {
  getAll,
  getId,
  create,
  update,
  destroy,
};

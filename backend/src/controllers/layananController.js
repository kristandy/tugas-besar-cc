const model = require('../models/layananModel');

async function getAll(req, res) {
  const data = await model.getAllLayanan();
  res.json(data);
}

async function getId(req, res) {
  const id = req.params.id;
  const data = await model.getLayananById(id);
  if (!data) {
    return res.status(404).json({ error: 'Layanan not found' });
  }
  res.json(data);
}

async function create(req, res) {
  try {
    const data = req.body;
    const created = await model.createLayanan(data);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function update(req, res) {
  const id = req.params.id;
  try {
    const data = req.body;
    const updated = await model.updateLayanan(id, data);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function destroy(req, res) {
  const id = req.params.id;
  try {
    const deleted = await model.deleteLayanan(id);
    res.json(deleted);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  getAll,
  getId,
  create,
  update,
  destroy
};

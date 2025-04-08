const model = require('../models/hariKerjaModel');

async function getAll(req, res) {
  const data = await model.getAllHariKerja();
  res.json(data);
}

async function getId(req, res) {
  const id = req.params.id;
  const data = await model.getHariKerjaById(id);
  if (!data) {
    return res.status(404).json({ error: 'HariKerja not found' });
  }
  res.json(data);
}

module.exports = {
  getAll,
  getId
};

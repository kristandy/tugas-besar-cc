const model = require('../models/keahlianTerapisModel')

async function getAll(req, res) {
  try {
    const data = await model.getAll()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

async function getById(req, res) {
  try {
    const data = await model.getById(req.params.id)
    if (!data) return res.status(404).json({ error: 'Not found' })
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

async function create(req, res) {
  try {
    const data = await model.create(req.body)
    res.status(201).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

async function update(req, res) {
  try {
    const data = await model.update(req.params.id, req.body)
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

async function remove(req, res) {
  try {
    await model.remove(req.params.id)
    res.json({ message: 'Deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};

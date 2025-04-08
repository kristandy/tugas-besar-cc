const prisma = require("../../prisma/client/index");

async function getAllTerapis() {
  return await prisma.terapis.findMany();
}

async function getTerapisById(id) {
  return await prisma.terapis.findUnique({ where: { id: parseInt(id) } });
}

async function createTerapis(data) {
  return await prisma.terapis.create({ data });
}

async function updateTerapis(id, data) {
  return await prisma.terapis.update({
    where: { id: parseInt(id) },
    data,
  });
}

async function deleteTerapis(id) {
  return await prisma.terapis.delete({ where: { id: parseInt(id) } });
}

module.exports = {
  getAllTerapis,
  getTerapisById,
  createTerapis,
  updateTerapis,
  deleteTerapis,
};
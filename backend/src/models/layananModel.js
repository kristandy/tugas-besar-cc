const prisma = require("../../prisma/client/index");

async function getAllLayanan() {
  return await prisma.layanan.findMany({
    include: {
      Keahlian: true
    }
  });
}

async function getLayananById(id) {
  return await prisma.layanan.findUnique({
    where: { id: parseInt(id) },
    include: { Keahlian: true }
  });
}

async function createLayanan(data) {
  return await prisma.layanan.create({ data });
}

async function updateLayanan(id, data) {
  return await prisma.layanan.update({
    where: { id: parseInt(id) },
    data
  });
}

async function deleteLayanan(id) {
  return await prisma.layanan.delete({
    where: { id: parseInt(id) }
  });
}

module.exports = {
  getAllLayanan,
  getLayananById,
  createLayanan,
  updateLayanan,
  deleteLayanan
};

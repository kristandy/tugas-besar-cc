const prisma = require("../../prisma/client/index");

async function getAllKeahlian() {
  return await prisma.keahlian.findMany();
}

async function getKeahlianById(id) {
  return await prisma.keahlian.findUnique({
    where: { id: Number(id) },
  });
}

async function createKeahlian(data) {
  return await prisma.keahlian.create({
    data: {
      keahlian: data.keahlian,
    },
  });
}

async function updateKeahlian(id, data) {
  return await prisma.keahlian.update({
    where: { id: Number(id) },
    data,
  });
}

async function deleteKeahlian(id) {
  return await prisma.keahlian.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  getAllKeahlian,
  getKeahlianById,
  createKeahlian,
  updateKeahlian,
  deleteKeahlian,
};

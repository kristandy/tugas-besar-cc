const prisma = require("../../prisma/client/index");

async function getAllHariKerja() {
  return await prisma.hariKerja.findMany({
  });
}

async function getHariKerjaById(id) {
  return await prisma.hariKerja.findUnique({
    where: { id: parseInt(id) }
  });
}

module.exports = {
  getAllHariKerja,
  getHariKerjaById
};

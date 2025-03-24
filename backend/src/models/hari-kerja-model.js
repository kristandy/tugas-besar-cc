const prisma = require("../../prisma/client/index");

// Get all work days
const getAllHariKerja = async () => {
  return await prisma.hariKerja.findMany({
    include: {
      terapis: true,
    },
  });
};

// Get work days by therapist ID
const getHariKerjaByTerapisId = async (terapisId) => {
  return await prisma.hariKerja.findMany({
    where: { id_terapis: parseInt(terapisId) },
  });
};

// Create a new work day
const createHariKerja = async (hariKerjaData) => {
  return await prisma.hariKerja.create({
    data: hariKerjaData,
  });
};

// Update a work day
const updateHariKerja = async (id, hariKerjaData) => {
  return await prisma.hariKerja.update({
    where: { id: parseInt(id) },
    data: hariKerjaData,
  });
};

// Delete a work day
const deleteHariKerja = async (id) => {
  return await prisma.hariKerja.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  getAllHariKerja,
  getHariKerjaByTerapisId,
  createHariKerja,
  updateHariKerja,
  deleteHariKerja,
};

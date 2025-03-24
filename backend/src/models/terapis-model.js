const prisma = require("../../prisma/client/index");

// Get all therapists
const getAllTerapis = async () => {
  return await prisma.terapis.findMany({
    include: {
      HariKerja: true,
    },
  });
};

// Get a single therapist by ID
const getTerapisById = async (id) => {
  return await prisma.terapis.findUnique({
    where: { id: parseInt(id) },
    include: {
      HariKerja: true,
    },
  });
};

// Create a new therapist
const createTerapis = async (terapisData) => {
  return await prisma.terapis.create({
    data: terapisData,
  });
};

// Update a therapist
const updateTerapis = async (id, terapisData) => {
  return await prisma.terapis.update({
    where: { id: parseInt(id) },
    data: terapisData,
  });
};

// Delete a therapist
const deleteTerapis = async (id) => {
  return await prisma.terapis.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  getAllTerapis,
  getTerapisById,
  createTerapis,
  updateTerapis,
  deleteTerapis,
};

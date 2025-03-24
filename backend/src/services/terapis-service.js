const terapisModel = require("../models/terapis-model");
const hariKerjaModel = require("../models/hari-kerja-model");

const getAllTerapis = async () => {
  try {
    return await terapisModel.getAllTerapis();
  } catch (error) {
    throw new Error(`Error getting all therapists: ${error.message}`);
  }
};

const getTerapisById = async (id) => {
  try {
    const terapis = await terapisModel.getTerapisById(id);
    if (!terapis) {
      throw new Error("Therapist not found");
    }
    return terapis;
  } catch (error) {
    throw new Error(`Error getting therapist: ${error.message}`);
  }
};

const createTerapis = async (terapisData) => {
  try {
    // Extract hariKerja data if it exists
    const { hariKerja, ...terapisInfo } = terapisData;

    // Create therapist
    const newTerapis = await terapisModel.createTerapis(terapisInfo);

    // Create associated work days if provided
    if (hariKerja && Array.isArray(hariKerja) && hariKerja.length > 0) {
      for (const hari of hariKerja) {
        await hariKerjaModel.createHariKerja({
          ...hari,
          id_terapis: newTerapis.id,
        });
      }

      // Get the complete therapist data with work days
      return await terapisModel.getTerapisById(newTerapis.id);
    }

    return newTerapis;
  } catch (error) {
    throw new Error(`Error creating therapist: ${error.message}`);
  }
};

const updateTerapis = async (id, terapisData) => {
  try {
    // Check if therapist exists
    const existingTerapis = await terapisModel.getTerapisById(id);
    if (!existingTerapis) {
      throw new Error("Therapist not found");
    }

    // Extract hariKerja data if it exists
    const { hariKerja, ...terapisInfo } = terapisData;

    // Update therapist information
    const updatedTerapis = await terapisModel.updateTerapis(id, terapisInfo);

    // Update work days if provided
    if (hariKerja && Array.isArray(hariKerja)) {
      // Get existing work days
      const existingHariKerja = await hariKerjaModel.getHariKerjaByTerapisId(id);

      // Process each work day
      for (const hari of hariKerja) {
        if (hari.id) {
          // Update existing work day
          await hariKerjaModel.updateHariKerja(hari.id, {
            hari_kerja: hari.hari_kerja,
            kuota_jam_kerja: hari.kuota_jam_kerja,
          });
        } else {
          // Create new work day
          await hariKerjaModel.createHariKerja({
            hari_kerja: hari.hari_kerja,
            kuota_jam_kerja: hari.kuota_jam_kerja,
            id_terapis: parseInt(id),
          });
        }
      }
    }

    // Return updated therapist with work days
    return await terapisModel.getTerapisById(id);
  } catch (error) {
    throw new Error(`Error updating therapist: ${error.message}`);
  }
};

// Delete therapist
const deleteTerapis = async (id) => {
  try {
    // Check if therapist exists
    const terapis = await terapisModel.getTerapisById(id);
    if (!terapis) {
      throw new Error("Therapist not found");
    }

    // Get related work days
    const hariKerja = await hariKerjaModel.getHariKerjaByTerapisId(id);

    // Delete work days first (handle foreign key constraint)
    for (const hari of hariKerja) {
      await hariKerjaModel.deleteHariKerja(hari.id);
    }

    // Delete therapist
    return await terapisModel.deleteTerapis(id);
  } catch (error) {
    throw new Error(`Error deleting therapist: ${error.message}`);
  }
};

module.exports = {
  getAllTerapis,
  getTerapisById,
  createTerapis,
  updateTerapis,
  deleteTerapis,
};

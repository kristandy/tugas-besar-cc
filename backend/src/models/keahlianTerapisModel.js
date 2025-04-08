const prisma = require("../../prisma/client/index");

async function getAll() {
  return await prisma.terapisKeahlian.findMany({
    include: {
      terapis: true,
      keahlian: true
    }
  })
}

async function getById(id) {
  return await prisma.terapisKeahlian.findUnique({
    where: { id: Number(id) },
    include: {
      terapis: true,
      keahlian: true
    }
  })
}

async function create(data) {
  return await prisma.terapisKeahlian.create({
    data
  })
}

async function update(id, data) {
  return await prisma.terapisKeahlian.update({
    where: { id: Number(id) },
    data
  })
}

async function remove(id) {
  return await prisma.terapisKeahlian.delete({
    where: { id: Number(id) }
  })
}

module.exports = { 
  getAll,
  getById,
  create,
  update,
  remove
};

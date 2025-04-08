const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const hariList = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
    'Minggu',
  ];

  for (const hari of hariList) {
    await prisma.hariKerja.upsert({
      where: { hari_kerja: hari },
      update: {},
      create: {
        hari_kerja: hari,
      },
    });
  }

  console.log('Hari kerja berhasil dibuat!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('L', 'P');

-- CreateEnum
CREATE TYPE "HariSatuMinggu" AS ENUM ('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu');

-- CreateTable
CREATE TABLE "layanan" (
    "id" SERIAL NOT NULL,
    "paket" VARCHAR(20) NOT NULL,
    "deskripsi_paket" VARCHAR(100) NOT NULL,
    "jam_paket" INTEGER NOT NULL,
    "id_keahlian" INTEGER NOT NULL,

    CONSTRAINT "layanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keahlian" (
    "id" SERIAL NOT NULL,
    "keahlian" VARCHAR(50) NOT NULL,

    CONSTRAINT "keahlian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terapis" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(50) NOT NULL,
    "jenis_kelamin" "Gender" NOT NULL,
    "nomor_hp" VARCHAR(13) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "terapis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terapis_keahlian" (
    "id" SERIAL NOT NULL,
    "id_terapis" INTEGER NOT NULL,
    "id_keahlian" INTEGER NOT NULL,

    CONSTRAINT "terapis_keahlian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hari_kerja" (
    "id" SERIAL NOT NULL,
    "hari_kerja" "HariSatuMinggu" NOT NULL,

    CONSTRAINT "hari_kerja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terapis_hari_kerja" (
    "id" SERIAL NOT NULL,
    "id_terapis" INTEGER NOT NULL,
    "id_hari" INTEGER NOT NULL,
    "kuota_jam" INTEGER NOT NULL,

    CONSTRAINT "terapis_hari_kerja_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "layanan" ADD CONSTRAINT "layanan_id_keahlian_fkey" FOREIGN KEY ("id_keahlian") REFERENCES "keahlian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terapis_keahlian" ADD CONSTRAINT "terapis_keahlian_id_terapis_fkey" FOREIGN KEY ("id_terapis") REFERENCES "terapis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terapis_keahlian" ADD CONSTRAINT "terapis_keahlian_id_keahlian_fkey" FOREIGN KEY ("id_keahlian") REFERENCES "keahlian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terapis_hari_kerja" ADD CONSTRAINT "terapis_hari_kerja_id_terapis_fkey" FOREIGN KEY ("id_terapis") REFERENCES "terapis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terapis_hari_kerja" ADD CONSTRAINT "terapis_hari_kerja_id_hari_fkey" FOREIGN KEY ("id_hari") REFERENCES "hari_kerja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[hari_kerja]` on the table `hari_kerja` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "hari_kerja_hari_kerja_key" ON "hari_kerja"("hari_kerja");

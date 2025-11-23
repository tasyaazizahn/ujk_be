/*
  Warnings:

  - The primary key for the `datasiswa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `DataSiswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `datasiswa` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `kode_siswa` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

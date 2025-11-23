/*
  Warnings:

  - You are about to alter the column `tgl_siswa` on the `datasiswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `datasiswa` MODIFY `tgl_siswa` DATETIME(3) NOT NULL;

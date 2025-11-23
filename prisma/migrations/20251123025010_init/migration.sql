-- CreateTable
CREATE TABLE `DataSiswa` (
    `kode_siswa` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_siswa` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `tgl_siswa` DATETIME(3) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`kode_siswa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

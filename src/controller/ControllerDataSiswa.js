const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllDataSiswa = async (req, res) => {
  try {
    const siswa = await prisma.dataSiswa.findMany();
    res.json(siswa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDataSiswaById = async (req, res) => {
  try {
    const siswa = await prisma.dataSiswa.findUnique({
      where: { id: Number(req.params.id) },
    });
    res.json(siswa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDataSiswa = async (req, res) => {
  try {
    const siswa = await prisma.dataSiswa.create({
      data: req.body,
    });
    res.status(201).json(siswa);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.updateDataSiswa = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { kode_siswa, nama_siswa, alamat, tgl_siswa, jurusan } = req.body;

    const siswa = await prisma.dataSiswa.update({
      where: { id },
      data: {
        kode_siswa,
        nama_siswa,
        alamat,
        tgl_siswa: tgl_siswa
          ? new Date(tgl_siswa).toISOString()
          : undefined,
        jurusan,
      },
    });

    res.status(200).json({
      msg: "Data berhasil diperbarui",
      data: siswa,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Gagal update data!",
      error: error.message,
    });
  }
};

exports.deleteDataSiswa = async (req, res) => {
  try {
    await prisma.dataSiswa.delete({
      where: { id: Number(req.params.id) },
    });
    res.json({ msg: "Data berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

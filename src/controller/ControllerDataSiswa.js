const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllDataSiswa = async (req, res) => {
  try {
    const data = await prisma.DataSiswa.findMany();
    res.json(data);
  } catch (err) {
    console.error("getAllDataSiswa Error:", err);
    res.status(500).json({ error: "Gagal mengambil data siswa." });
  }
};

const getDataSiswaById = async (req, res) => {
  try {
    const { id } = req.params;
    const siswa = await prisma.DataSiswa.findUnique({
      where: { kode_siswa : Number(id) },
    });

    if (!siswa) {
      return res.status(404).json({ error: "Data Siswa tidak ditemukan" });
    }

    res.json(siswa);
  } catch (err) {
    console.error("getDataSiswaById Error:", err);
    res.status(500).json({ error: "Gagal mengambil data siswa berdasarkan ID." });
  }
};

const createDataSiswa = async (req, res) => {
  try {
    const { kode_siswa } = req.body;

    const existing = await prisma.DataSiswa.findUnique({
      where: { kode_siswa },
    });

    if (existing) {
      return res.status(400).json({ error: "kode siswa sudah digunakan." });
    }

    const newSiswa = await prisma.DataSiswa.create({
      data: {
        kode_siswa: Number(req.body.kode_siswa),
        nama_siswa: req.body.nama_siswa,
        alamat: req.body.alamat,
        tgl_siswa: eq.body.tgl_siswa,
        jurusan: req.body.jurusan,
      },
    });

    res.status(201).json(newSiswa);
  } catch (err) {
    console.error("createSiswa Error:", err);
    res.status(500).json({ error: "Gagal membuat data siswa baru." });
  }
};

const updateDataSiswa = async (req, res) => {
  try {
    const { kode_siswa } = req.params;
    const updated = await prisma.DataSiswa.update({
      where: { kode_siswa: Number(id) },
      data: {
        nama_nama: req.body.nama_siswa,
        alamat: req.body.alamat,
        tgl_siswa: eq.body.tgl_siswa,
        jurusan: req.body.jurusan,
      },
    });

    res.json(updated);
  } catch (err) {
    console.error("update Data Siswa Error:", err);
    res.status(500).json({ error: "Gagal memperbaharui data siswa." });
  }
};

const deleteDataSiswa = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.produk.delete({
      where: { kode_siswa: Number(id) },
    });
    res.json({ message: "Data Siswa berhasil dihapus." });
  } catch (err) {
    console.error("Delete Data Siswa Error:", err);
    res.status(500).json({ error: "Gagal menghapus data siswa." });
  }
};

module.exports = {
  getAllDataSiswa,
  getDataSiswaById,
  createDataSiswa,
  updateDataSiswa,
  deleteDataSiswa,
};

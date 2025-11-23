const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllDataSiswa = async (req, res) => {
  try {
    const data = await prisma.dataSiswa.findMany();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data siswa." });
  }
};

const getDataSiswaById = async (req, res) => {
  try {
    const { id } = req.params;
    const siswa = await prisma.dataSiswa.findUnique({
      where: { id: Number(id) },
    });

    if (!siswa) return res.status(404).json({ error: "Data tidak ditemukan" });

    res.json(siswa);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil detail siswa" });
    res.status(500).json({ error: "Gagal mengambil produk berdasarkan ID." });
  }
};

const createDataSiswa = async (req, res) => {
  try {
    const { kode_siswa } = req.body;

    const existing = await prisma.DataSiswa.findUnique({
      where: { kode_siswa },
    });

    if (existing) {
      return res.status(400).json({ error: "Kode Siswa sudah digunakan." });
    }

    const data = await prisma.dataSiswa.create({
      data: {
        kode_siswa: Number(req.body.kode_siswa),
        nama_siswa: req.body.nama_siswa,
        alamat: req.body.alamat,
        tgl_siswa: new Date(req.body.tgl_siswa),
        jurusan: req.body.jurusan,
      },
    });
    res.status(201).json(data);
  } catch (err) {
     console.error("create Data Siswa Error:", err);
    res.status(500).json({ error: "Gagal membuat data baru." });
  }
};

const updateDataSiswa = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await prisma.dataSiswa.update({
      where: { id: Number(id) },
      data: {
        kode_siswa: req.body.kode_siswa,
        nama_siswa: req.body.nama_siswa,
        alamat: req.body.alamat,
        tgl_siswa: new Date(req.body.tgl_siswa),
        jurusan: req.body.jurusan,
      },
    });
    res.json(data);
  } catch (err) {
    console.error("update Data Siswa Error:", err);
    res.status(500).json({ error: "Gagal memperbarui data siswa." });
  }
};

const deleteDataSiswa = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.dataSiswa.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Data siswa berhasil dihapus" });
  } catch (err) {
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

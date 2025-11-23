const validateDataSiswa = (req, res, next) => {
    const data = req.body;
    const errors = [];

    // Validasi POST: semua data wajib
    if (req.method === "POST") {
        if (!data.kode_siswa || typeof data.kode_siswa !== "string") {
            errors.push("kode_siswa wajib dan harus berupa string");
        }
        if (!data.nama_siswa || typeof data.nama_siswa !== "string") {
            errors.push("nama_siswa wajib dan harus berupa string");
        }
        if (!data.alamat || typeof data.alamat !== "string") {
            errors.push("alamat wajib diisi dan harus berupa string");
        }
        if (!data.tgl_siswa || typeof data.tgl_siswa !== "string" || isNaN(Date.parse(data.tgl_siswa))) {
            errors.push("tgl_siswa wajib dan harus format tanggal valid (contoh: 1999-11-24)");
        }
        if (!data.jurusan || typeof data.jurusan !== "string") {
            errors.push("jurusan wajib dan harus berupa string");
        }
    }

    // Validasi PUT: hanya data yang dikirim
    if (req.method === "PUT") {
        if (data.kode_siswa !== undefined && typeof data.kode_siswa !== "string") {
            errors.push("kode_siswa harus berupa string jika diisi");
        }
        if (data.nama_siswa !== undefined && typeof data.nama_siswa !== "string") {
            errors.push("nama_siswa harus berupa string jika diisi");
        }
        if (data.alamat !== undefined && typeof data.alamat !== "string") {
            errors.push("alamat harus berupa string jika diisi");
        }
        if (data.tgl_siswa !== undefined && (typeof data.tgl_siswa !== "string" || isNaN(Date.parse(data.tgl_siswa)))) {
            errors.push("tgl_siswa harus format tanggal valid (contoh: 1999-11-24)");
        }
        if (data.jurusan !== undefined && typeof data.jurusan !== "string") {
            errors.push("jurusan harus berupa string jika diisi");
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({ error: errors });
    }

    next();
};

module.exports = { validateDataSiswa };

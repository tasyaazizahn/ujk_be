const validateDataSiswa = (req, res, next) => {
    const data = req.body;
    const errors = [];

    if(req.method === "POST") {
        if(!data.kode_siswa || typeof data.kode_produk !== "string") {
            errors.push("kode_siswa wajib dan harus berupa string");
        }
    }

    if(!data.nama_siswa || typeof data.nama_siswa !== "string") {
        errors.push("nama_Siswa wajib dan harus berupa string");
    }

    if(!data.alamat || typeof data.alamat !== "string") {
        errors.push("alamat wajib diisi dan harus berupa string")
    }

    // if(typeof data.harga !== "number" || data.harga <= 0) {
    //     errors.push("stok harus angka dan tidak boleh negatif");
    // }

    if(typeof data.tanggal_siswa && typeof data.tanggal_siswa !== "DateTime") {
        errors.push("tanggal_siswa harus berupa DateTime jika diisi");
    }

    if(typeof data.jurusan && typeof data.jurusan !== "string") {
        errors.push("jurusan harus berupa string jika diisi");
    }

    if(errors.length > 0){
        return res.status(400).json({error: errors});
    }

    next();
};

module.exports = {
    validateDataSiswa,
};
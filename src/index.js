const express = require("express");
const cors = require("cors");
const DataSiswaRoute = require("./route/RouteDataSiswa.js");
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(err.status || 500).json({
        error: err.message || "Terjadi kesalahan di server",
    });
});

app.use("/data-siswa", DataSiswaRoute);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
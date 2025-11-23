require("dotenv").config();
const express = require("express");
const cors = require("cors");
const DataSiswaRoute = require("./route/RouteDataSiswa.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(err.status || 500).json({
        error: err.message || "Terjadi kesalahan di server",
    });
});
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});


app.use("/data-siswa", DataSiswaRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

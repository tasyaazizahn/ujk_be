const express = require("express");
const {
    getAllDataSiswa,
    getDataSiswaById,
    createDataSiswa,
    updateDataSiswa,
    deleteDataSiswa,
} = require("../controller/ControllerDataSiswa.js");

const { validateDataSiswa } = require("../middleware/Validation.js");

const router = express.Router();

router.get("/", getAllDataSiswa);
router.get("/:id", getDataSiswaById);
router.post("/", validateDataSiswa, createDataSiswa);
router.put("/:id", validateDataSiswa, updateDataSiswa);
router.delete("/:id", deleteDataSiswa);

module.exports = router;
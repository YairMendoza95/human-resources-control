const express = require("express");
const router = express.Router();
const Certification = require("../controllers/certification.controller");

router.get('', Certification.getAll);
router.get('/:id', Certification.getById);
router.post("/add", Certification.create);
router.put('/edit/:id', Certification.edit);

module.exports = router;
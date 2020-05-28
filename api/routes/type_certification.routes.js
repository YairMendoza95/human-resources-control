const express = require("express");
const router = express.Router();
const TypeCert = require('../controllers/type_certification.controller');

router.get('', TypeCert.getAll);
router.get('/:id', TypeCert.getById);
router.post('/add', TypeCert.create);
router.put('/edit/:id', TypeCert.edit);

module.exports = router;
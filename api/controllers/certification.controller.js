const db = require('../models');
const Certification = db.certifications;
const Op = db.Sequelize.Op;

const cert = {

    create: async (req, res) => {
        if (!req.body) {
            return res.status(400).json({
                message: "El campo no puede estaren blanco",
            });
        }

        const certificacion = {
            certification_name: req.body.certification_name,
            idtype_certification: req.body.idtype_certification,
            certification_country: req.body.certification_country,
            certification_version: req.body.certification_version,
            certification_description: req.body.certification_description
        };

        return await Certification.create(certificacion)
            .then((certDB) => res.status(201).send(certDB))
            .catch((err) => res.status(400).send(err));
    },

    edit: async (req, res) => {
        const id = req.params.id;
        if (!req.body) {
            return res.status(400).json({
                message: "El campo no puede estar en blanco",
            });
        }

        const certificacion = {
            certification_name: req.body.certification_name,
            idtype_certification: req.body.idtype_certification,
            certification_country: req.body.certification_country,
            certification_version: req.body.certification_version,
            certification_description: req.body.certification_description
        };


        return await Certification.update(certificacion, {
                where: {
                    id,
                },
            })
            .then((num) => {
                if (num == 1) {
                    res.send({
                        message: "Certification was updated successfully",
                    });
                } else {
                    res.send({
                        message: "Certification cannot updated",
                    });
                }
            })
            .catch((err) => res.status(500).send(err));
    },

    getById: async (req, res) => {
        const id = req.params.id;
        return await db.sequelize.query('SELECT certifications.id AS idcertification, certifications.certification_name AS certification_name, type_certifications.type_name AS certification_type, certifications.certification_country AS certification_country, certifications.certification_version AS certification_version, certifications.certification_description AS certification_description FROM certifications INNER JOIN type_certifications WHERE certifications.idtype_certification = type_certifications.id AND certifications.id=:id', {
                replacements: {
                    id
                },
                type: db.Sequelize.QueryTypes.SELECT
            })
            .then((certDB) => res.status(201).send(certDB))
            .catch((err) => res.status(404).send(err));
    },

    getAll: async (req, res) => {
        return await db.sequelize.query('SELECT certifications.id AS idcertification, certifications.certification_name AS certification_name, type_certifications.type_name AS certification_type, certifications.certification_country AS certification_country, certifications.certification_version AS certification_version, certifications.certification_description AS certification_description FROM certifications INNER JOIN type_certifications WHERE certifications.idtype_certification = type_certifications.id', {
                type: db.Sequelize.QueryTypes.SELECT
            })
            .then(certsDB => {
                res.status(200).send(certsDB)
            })
            .catch(err => res.status(500).send(err));
    }
    
};

module.exports = cert;
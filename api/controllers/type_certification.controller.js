const TypeCert = require('../models').type_certifications;
const Op = require('../models').Sequelize.Op;

const type = {

    create: async (req, res) => {
        if (!req.body) {
            return res.status(500).send({
                message: 'Los campos no pueden estar en blanco'
            });
        }

        const type = {
            type_name: req.body.type_name,
            type_description: req.body.type_description
        };

        return await TypeCert.create(type)
            .then(typeDB => res.status(201).send(typeDB))
            .catch(err => res.status(500).send(err));
    },

    getAll: async (req, res) => {
        const type = req.query.typeName;
        let condition = type ? {
            type: {
                [Op.like]: `%${type}%`
            }
        } : null;

        return await TypeCert.findAll({
                where: condition,
                attributes: {
                    exclude: ['updatedAt', 'createdAt']
                }
            })
            .then(typeDB => res.send(typeDB))
            .catch(err => res.status(500).send(err));
    },

    getById: async (req, res) => {
        let id = req.params.id;

        return await TypeCert.findOne({
                where: {
                    id
                },
                attributes: {
                    exclude: ['updatedAt', 'createdAt']
                }
            })
            .then(typeDB => res.status(200).send(typeDB))
            .catch(err => res.status(404).send(err));
    },

    edit: async (req, res) => {
        let id = req.params.id;

        const type = {
            type_name: req.body.type_name,
            type_description: req.body.type_description
        };

        return await TypeCert.update(type, {
                where: {
                    id
                }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: 'Updated successfully'
                    });
                } else {
                    res.send({
                        message: 'Cannot update'
                    });
                }
            })
            .catch(err => res.status(500).send(err));
    }
}

module.exports = type;
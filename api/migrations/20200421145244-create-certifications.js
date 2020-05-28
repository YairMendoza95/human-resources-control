'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('certifications', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          certification_name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          idtype_certification: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          certification_country: {
            type: Sequelize.STRING,
            allowNull: false
          },
          certification_version: {
            type: Sequelize.STRING,
            allowNull: false
          },
          certification_description: {
            type: Sequelize.TEXT
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        }, {
          transaction: t
        }),

        queryInterface.addConstraint('certifications', ['idtype_certification'], {
          type: 'FOREIGN KEY',
          name: 'FK_certifications_type_certifications_1',
          references: {
            table: 'type_certifications',
            field: 'id'
          }
        }, {
          transaction: t
        })
      ])
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('certifications');
  }
};
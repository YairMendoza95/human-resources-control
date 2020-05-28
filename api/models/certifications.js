'use strict';
module.exports = (sequelize, DataTypes) => {
  const certifications = sequelize.define('certifications', {
    certification_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idtype_certification: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    certification_country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    certification_version: {
      type: DataTypes.STRING,
      allowNull: false
    },
    certification_description: DataTypes.TEXT
  }, {});
  certifications.associate = function (models) {
  };
  return certifications;
};
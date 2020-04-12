'use strict';
module.exports = (sequelize, DataTypes) => {
  const assigment = sequelize.define('assigment', {
    assigment_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    assigment_description: DataTypes.STRING,
    assigment_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {});
  assigment.associate = function (models) {
    // associations can be defined here
  };
  return assigment;
};
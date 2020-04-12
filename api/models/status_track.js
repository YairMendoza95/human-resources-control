'use strict';
module.exports = (sequelize, DataTypes) => {
  const status_track = sequelize.define('status_track', {
    status_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  status_track.associate = function (models) {
    // associations can be defined here
  };
  return status_track;
};
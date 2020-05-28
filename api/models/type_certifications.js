'use strict';
module.exports = (sequelize, DataTypes) => {
	const type_certifications = sequelize.define('type_certifications', {
		type_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		type_description: DataTypes.STRING
	}, {});
	type_certifications.associate = function (models) {
	};
	return type_certifications;
};
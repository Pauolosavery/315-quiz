'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Question }) {
      Theme.hasMany(Question, { foreignKey: 'theme_id' });
    }
  }
  Theme.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};
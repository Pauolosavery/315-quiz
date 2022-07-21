'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      Theme.hasMany(Question, { foreignKey: 'question_id' });
    }
  }
  Theme.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};
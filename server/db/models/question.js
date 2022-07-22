const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      Question.belongsTo(Theme, { foreignKey: 'theme_id' });
      Question.Themes = Question.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  Question.init({
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    theme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Themes',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
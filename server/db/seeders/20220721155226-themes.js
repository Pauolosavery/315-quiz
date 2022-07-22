module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [
      {
        title: 'Спортивная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Не спортивная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Themes', arr, {});
  },

  async down(queryInterface, Sequelize) {

  },
};

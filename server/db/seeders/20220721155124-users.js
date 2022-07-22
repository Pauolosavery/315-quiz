const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const hash = await bcrypt.hash('12345678', 10);
    const arr = [
      {
        name: 'Admin',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Users', arr, {});
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

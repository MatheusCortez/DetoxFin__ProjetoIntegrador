'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ganhogastos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGanhoGastos: {
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.STRING
      },
      Carteira_idCarteira: {
        type: Sequelize.STRING
      },
      Carteira_Usuario_idUsuario: {
        type: Sequelize.STRING
      },
      entradaSaida: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ganhogastos');
  }
};
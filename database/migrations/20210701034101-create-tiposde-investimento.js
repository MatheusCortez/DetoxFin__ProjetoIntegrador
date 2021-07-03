'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tiposdeInvestimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTipoDeInvestimento: {
        type: Sequelize.INTEGER
      },
      aplicacaoInicial: {
        type: Sequelize.STRING
      },
      dateInicial: {
        type: Sequelize.STRING
      },
      valorTotal: {
        type: Sequelize.STRING
      },
      aporte: {
        type: Sequelize.STRING
      },
      previsaoDeLucros: {
        type: Sequelize.STRING
      },
      lucro: {
        type: Sequelize.STRING
      },
      dateFinalPrevista: {
        type: Sequelize.STRING
      },
      CNPJ: {
        type: Sequelize.STRING
      },
      carteiraInvestimentos_idInvestimentos: {
        type: Sequelize.INTEGER
      },
      renda: {
        type: Sequelize.STRING
      },
      orgaoEmissor: {
        type: Sequelize.STRING
      },
      juros: {
        type: Sequelize.STRING
      },
      descricao: {
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
    await queryInterface.dropTable('tiposdeInvestimentos');
  }
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposdeInvestimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tiposdeInvestimento.init({
    idTipoDeInvestimento: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:true,
      autoIncrement:true
    },
    aplicacaoInicial: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    dateInicial: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    valorTotal: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    aporte: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    previsaoDeLucros: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    lucro: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    dataFinalPrevista: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    CNPJ: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    carteiraInvestimentos_idInvestimentos: {
      type:DataTypes.INTEGER,
      references: {
        model:'carteirainvestimentos'
      },
      allowNull:true,
    },
    renda: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    orgaoEmissor: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    juros: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    descricao: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    nome: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    carteirainvestimentos_usuario_idUsuario: {
      type:DataTypes.INTEGER,
      references: {
        model:'User'
      },
      allowNull:true,
    },
    tipo:{
      type:DataTypes.STRING,
      allowNull:true,
    },
  }, {
    sequelize,
    modelName: 'tiposdeInvestimento',
  });
  return tiposdeInvestimento;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposdeinvestimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tiposdeinvestimento.init({
    idTipoDeInvestimento: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:true,
      autoIncrement:true
    },
    aplicacaoInicial: {
      type:DataTypes.DECIMAL,
      allowNull:true,
    },
    dateInicial: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    valorTotal: {
      type:DataTypes.DECIMAL,
      allowNull:true,
    },
    aporte: {
      type:DataTypes.DECIMAL,
      allowNull:true,
    },
    previsaoDeLucros: {
      type:DataTypes.DECIMAL,
      allowNull:true,
    },
    lucro: {
      type:DataTypes.DECIMAL,
      allowNull:true,
    },
    dataFinalPrevista: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    CNPJ: {
      type:DataTypes.DECIMAL,
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
    modelName: 'tiposdeinvestimento',
  });
  return tiposdeinvestimento;
};
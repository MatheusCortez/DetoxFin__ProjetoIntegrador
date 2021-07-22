'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ganhogastos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  ganhogastos.init({
    idGanhoGastos: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:true,
      autoIncrement:true
    },
    data: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    descricao: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    valor: {
      type:DataTypes.DECIMAL,
      allowNull:true,
    },
    Carteira_idCarteira: {
      type:DataTypes.INTEGER,
      references: {
        model:'carteira'
      },
      allowNull:true,
      
    },
    Carteira_Usuario_idUsuario: {
      type:DataTypes.INTEGER,
      references: {
        model:'User'
      },
      allowNull:true,
    },
    entradaSaida: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    nome: {
      type:DataTypes.STRING,
      allowNull:true,
    },
  }, {
    sequelize,
    modelName: 'ganhogastos',
  });
  return ganhogastos;
};
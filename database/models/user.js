'use strict';
const {
  Model
} = require('sequelize');
const { stringify } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.carteira, {
        foreignKey:'Usuario_idUsuario', 
        as:'carteira'
      }) 
      this.hasOne(models.carteirainvestimentos, {
        foreignKey:'Usuario_idUsuario',
        as:'carteirainvestimentos'
      })
    }
  };
  User.init({
    idUsuario: {
      type:DataTypes.STRING,
      primaryKey:true,
      allowNull:true,
      unique:true,
      autoIncrement:true
    },
    nome: {
      type:DataTypes.STRING(300),
      allowNull:true
    },
    email: {
      type:DataTypes.STRING(150),
      allowNull:true,
      unique:true
    },
    cpf: {
      type:DataTypes.STRING(11),
      allowNull:true,
      unique:true
    },
    telefone: {
      type: DataTypes.STRING(11),
      allowNull:true,
      unique:true,
    },
    senha: {
      type:DataTypes.STRING(150),
      allowNull:true,
      unique:true,

    },
    perfilInvestidor:{ 
      type:DataTypes.STRING(45)
    },
    resultadoPerfilInvestidor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName:'Usuario',
    timeZone:'America/SaoPaulo'
  });
  return User;
};
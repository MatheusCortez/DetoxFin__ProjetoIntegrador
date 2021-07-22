'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carteirainvestimentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  carteirainvestimentos.init({
    idInvestimentos: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:true,
      unique:true,
      autoIncrement:true
    },
    Usuario_idUsuario: {
      type:DataTypes.INTEGER,
      references: {
        model: 'User'
      },
      allowNull:true,
    },
  }, {
    sequelize,
    modelName: 'carteirainvestimentos',
  });
  return carteirainvestimentos;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carteira extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ganhogastos), {
        foreignKey: 'Carteira_idCarteira',
        targetKey: 'idCarteira'
      }
    }
  };
  carteira.init({
    idCarteira: {
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
    modelName: 'carteira',
  });
  return carteira;
};


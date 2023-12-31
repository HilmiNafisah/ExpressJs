'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      category.belongsToMany(models.product, {foreignKey: "category_id", through: models.productcategory})
      // define association here
    }
  }
  category.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movies.init({
    name: DataTypes.STRING,
    time: DataTypes.STRING,
    rating: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};
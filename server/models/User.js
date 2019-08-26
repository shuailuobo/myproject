const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Model extends Sequelize.Model {}
  Model.init({
    phone: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [8, 40]
      }
    }
  }, {
    sequelize,
    modelName: 'User'
  })
  return Model
}
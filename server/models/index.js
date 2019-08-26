const path = require('path')
const fs = require('fs')
const config = require('../config/index.js')
const Sequelize = require('sequelize')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.options
)
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
const User = sequelize.import('./User.js')

db.Sequelize = Sequelize
db.sequelize = sequelize
db.User = User

module.exports = db
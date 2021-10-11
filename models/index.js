const mysql = require('mysql')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('music', 'root', '', {
  // host: process.env.HOST,
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases: false,
  // SQLite database path
  // storage: './db/database.sqlite',
})
module.exports = sequelize

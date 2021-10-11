const Sequelize = require('sequelize')
const sequelize = require('./index')

const Peserta = sequelize.define('pesertas', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  fakultas: {
    type: Sequelize.STRING,
  },
  prodi: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  ucapan: {
    type: Sequelize.STRING,
  },
  vaksin: {
    type: Sequelize.STRING,
  },
})

module.exports = Peserta

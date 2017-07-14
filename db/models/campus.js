
'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')

const Campus = db.define('Campus', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }

})

module.exports = Campus;

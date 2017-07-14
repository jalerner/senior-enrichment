
'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')

const Student = db.define('Student', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false
  }

})

module.exports = Student;
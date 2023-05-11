const Sequelize = require('sequelize');
const db = require('../database');

const GroceryList = db.define('groceryList', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    price:{
        type: Sequelize.DOUBLE,
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
        default:1,
    },

})

module.exports = GroceryList;
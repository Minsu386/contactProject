const db = require('./database');
const Contact = require('./models/contact');
const GroceryList = require('./models/groceryList');
const Sequelize = require('sequelize');


module.exports = {
        Contact,
        GroceryList, 
        db
}
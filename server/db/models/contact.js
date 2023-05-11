const Sequelize = require('sequelize');
const db = require('../database');

const Contact = db.define('contact', {
    name:{
        type: Sequelize.STRING,
        allowNull: false, 
        
    }, 
    phoneNumber:{
        type: Sequelize.BIGINT,
        unique: true,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail:true
        }
    },
})

module.exports = Contact;
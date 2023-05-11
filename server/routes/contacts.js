const router = require('express').Router();
const {Contact} = require('../db');

//get all contacts 
router.get('/', async(req, res, next)=>{
    try{
        const contacts = await Contact.findAll();
        res.send(contacts);
    } catch(er) {
        next(er)
    }
})

//get all contacts by id
router.get('/:id', async(req, res, next)=>{
    try{
        const contact = await Contact.findByPk(req.params.id);
        res.send(contact);
    } catch(er) {
        next(er)
    }
})
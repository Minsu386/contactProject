const router = require('express').Router();
const {GroceryList} = require('../db');

//get all groceries 
router.get('/', async(req, res, next)=>{
    try{
        const allItems = await GroceryList.findAll();
        res.send(allItems);
    } catch(er) {
        next(er)
    }
})

module.exports = router;
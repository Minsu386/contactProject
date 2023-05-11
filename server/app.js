const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const contactRouter = require('./routes/contacts');
const groceryList = require('./routes/groceryList')

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use('/api/contacts', contactRouter);
app.use('/api/groceryList', groceryList);

app.use((err,req,res)=>{
  console.log("error is", err.status);
  res.send(err.message);
})

app.use(cors())

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const orders = require('./routes/orders')
const meals = require('./routes/meals')

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true})

app.use(cors())

app.get('/',(req,res)=> {
    res.send('ruta raiz')
})

app.use(express.json())

app.use('/api/orders',orders)
app.use('/api/meals',meals)

module.exports = app;
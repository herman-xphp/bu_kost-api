const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productRoute = require('./src/routes/products');

app.use(bodyParser.json())  // type JSON

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})
app.use('/', productRoute);

app.listen(4000);
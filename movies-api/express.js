const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/json', function (req, res) {
  res.json({ hello: 'world' });
});

app.get('/year/:num', function (req, res) {
  console.log('***Consulta de año bisiesto***');
  const year = req.params.num;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    res.send(year + ' es bisiesto.');
  } else {
    res.send(year + ' no es bisiesto.');
  }
});

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

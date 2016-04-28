'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use('/', express.static('public'));

app.options('*', cors());

app.post('/', function (req, res, next) {
  res.json(req.headers);
  next();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

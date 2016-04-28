'use strict';

var express = require('express');
var app = express();

app.use('/', express.static('public'));

app.post('/api', function (req, res, next) {
  res.send(req.headers);
  next();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

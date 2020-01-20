var express = require('express');
var _ = require("underscore");
var dataService = require('./dataService.js');

var app = express();
var PORT = 8080;




app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
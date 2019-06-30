var express = require('express');
var app = express();
var exports = module.exports = {};
port = process.env.PORT || 3000;

app.listen(port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


console.log('property-po lit Api server started on: ' + port);
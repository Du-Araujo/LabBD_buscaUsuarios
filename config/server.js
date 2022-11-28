var express = require('express');
var app = express();

//embedded javascript
app.set('view engine', 'ejs')
app.set('views','./app/views')

module.exports = app;
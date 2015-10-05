var express = require('express');
var router = express.Router();
var double = require('../models/double');
var vars = require('../logic/vars');

//set the route for the double button
router.get('/', function(req, res, next) {

 double();

 res.render('index');
});

module.exports = router;
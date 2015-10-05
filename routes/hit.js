var express = require('express');
var router = express.Router();
var hit = require('../models/hit');
var score = require('../logic/vars');
var vars = require('../logic/vars');


//set the route for the hit button
router.get('/', function(req, res, next) {

    hit();

    res.render('index');
});

module.exports = router;
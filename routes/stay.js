var express = require('express');
var router = express.Router();
var vars = require('../logic/vars');
var stay = require('../models/stay');


//set the route for the stay button
router.get('/', function(req, res, next) {

        stay();

    res.render('index');

});

module.exports = router;
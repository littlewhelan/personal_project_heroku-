var express = require('express');
var router = express.Router();
var dealHand = require('../models/deal');


router.get('/', function(req, res, next) {

    dealHand();

    res.render('index');
});

module.exports = router;
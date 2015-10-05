var express = require('express');
var router = express.Router();
var split = require('../models/split');

router.get('/', function(req, res, next) {

    split();

    res.render('index');
});

module.exports = router;

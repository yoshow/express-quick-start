var express = require('express');
var router = express.Router();
var appConfig = require('../app.config.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function (req, res, next) {
  res.send('respond with a list resource' + appConfig.name);
});

module.exports = router;

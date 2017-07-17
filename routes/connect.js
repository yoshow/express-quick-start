// import axios from 'axios';
var axios = require('axios');
var express = require('express');

var appConfig = require('../app.config.js');

var router = express.Router();

axios.defaults.baseURL = appConfig.webapi.baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * 验证接口 
 * /connect/auth/authorize
 */
router.post('/auth/authorize', function (req, res, next) {
  axios.post('/connect/auth/authorize', req.body).then(function (response) {
    // console.log(response);
    res.send(response.data);
  }).catch(function (error) {
    console.log(error);
  });
});

/**
 * 获取访问令牌接口 
 * /connect/auth/authorize
 */
router.post('/auth/token', function (req, res, next) {
  axios.post('/connect/auth/token', req.body).then(function (response) {
    res.send(response.data);
  }).catch(function (error) {
    console.log(error);
  });
});

module.exports = router;

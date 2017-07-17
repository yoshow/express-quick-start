// import axios from 'axios';
var axios = require('axios');
var express = require('express');

var appConfig = require('../app.config.js');

var router = express.Router();

appConfig.webapi.baseURL;

axios.defaults.baseURL = appConfig.webapi.baseURL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

/* GET home page. */
router.get('/', function (req, res, next) {

  axios.post('/connect/auth/authorize', {
    clientId: '8ffdec2a3a2c406482800aebd86de17c',
    loginName: 'root',
    password: '2ca20143dc515cc2bb6711cea21f7a5e4e8326ff'
  }).then(function (response) {
    // console.log(response);
    res.render('index', {
      title: '接口测试',
      testid: response.data.id,
      result: response.data,
      returnCode: response.data.message.returnCode,
      value: response.data.message.value
    });
  }).catch(function (error) {
    console.log(error);
  });
});

module.exports = router;

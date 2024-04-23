var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/get-user-query', function (req, res, next) {
  const { name, loc } = req.query;
  res.send(`My name is ${name} , I am from ${loc}`)
});

router.get('/get-user-path/:name/:loc', function (req, res, next) {
  const { name, loc } = req.params
  res.send(`My name is ${name} , am from ${loc}`);
});

router.put('/get-user-header', function (req, res, next) {
  const { name, loc } = req.headers
  res.send(`My name is ${name}, am from ${loc}`)
});

router.post('/get-user-body', function (req, res, next) {
  const { name, loc } = req.body
  res.send(`My name is ${name} , am from ${loc}`)
})

module.exports = router;

var express = require('express');
// const { redirect } = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express JS Website' });
});

module.exports = router;

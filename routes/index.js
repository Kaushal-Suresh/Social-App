var express = require('express');
var router = express.Router();

/* GET sign-up page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET sign-in page. */
router.get('/signin', function(req, res, next) {
  res.render('signin');
});

/* GET profile creation page. */
router.get('/createprofile', function(req, res, next) {
  res.render('createprofile');
});

module.exports = router;
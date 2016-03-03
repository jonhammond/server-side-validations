var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Form Validation' });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    res.status(200).render('index', { title: 'You done a validate.' })
});

module.exports = router;


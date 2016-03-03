var express = require('express');
var router = express.Router();

var emails = ["jonh1016@gmail.com", "tedjones@dickhead.com"];



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Form Validation' });
});

router.post('/', function(req, res, next) {
    var opt = req.body.option;
    var email = req.body.email;
    var errors = validate(req.body);

    if ( emails.indexOf(email) !== -1) {
      res.render ('index', {
        title: 'Some Errors:',
        errors: errors});
    }

    else if(!opt) {
      res.render('index', { title: "Some errors", errors: errors });
    }
    // console.log(req.body);
    else {
      res.status(200).render('index', { title: 'You done a validate.' });
    }
});

module.exports = router;

function validate (body) {
  var errors = [];
  if ( emails.indexOf(body.email) !== -1) {
    errors.push('Email already exists!');
  }
  if (!body.option) {
    errors.push('No hate mail please');
  }
  return errors;
}

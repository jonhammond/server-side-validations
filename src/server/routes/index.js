var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Form Validation' });
});

router.post('/', function(req, res, next) {
    var postObj = req.body;
    var validMessage = validateObject(postObj)
    console.log(validMessage);
    if (validMessage === true) {
        res.render('index', {title: 'Express Form Validation', success : 'All good!'})
    } else {
        // console.log(validMessage);
        res.status(200).render('index', {title: 'Express Form Validation', error : validMessage})
    }
});

module.exports = router;


function validateObject (obj) {
    var email = obj.email;
    var option = obj.option;
    var message = obj.message;
    if(email.trim() === '' && message.trim() === '') {
        return ('Message and Email can\'t be blank!!')
    } else if (email.trim() === '') {
        return ('Email can\'t be blank!!!')
    } else if (message.trim() ==='') {
        return ('Message can\'t be blank')
    } else {
        return true;
    }
}

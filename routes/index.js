var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// use get method to render login page for form input
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  var data = req.body
  var username = data.username
  var password = data.password
  // tra du lieu bang console
  // console.log(username)
  // console.log(password)
  // tra du lieu bang json
  //res.send('output', { username: username, password: password })
  //res.send(data)
  if(username == 'admin' && password == '1234') {
    res.send('<h1>Login Successfully!</h1>')
  } else {
    res.send('<h1>Login Failed!</h1>')
  }
});

router.get('/input', (req, res) => {
  res.render('add_student')
})

router.post('/output', (req, res) => {
  res.render('view_student', { student: req.body})
})

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const values = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODEJS"]
  const person = { name: "Arjun", comments: { comment: "Developer", date: "07-07-2020" } }
  // const person = { name: "Arjun", admin: "true" }
  res.render('index', { person });
});

module.exports = router;

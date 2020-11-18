var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// POST Form
router.post('/submit', (req, res) => {
  MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err)
      console.log(err)
    else
      client.db("form").collection("users").insertOne(req.body)
  })
  res.send("Submitted")
})
module.exports = router;

var express = require('express');
var router = express.Router();

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Index response at: ' + dateTime );
});

module.exports = router;

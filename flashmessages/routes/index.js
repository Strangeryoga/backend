var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/failed', function(req, res) {
  req.flash('age', 12);
  req.flash('name', 'tejas')
  res.send("Done");
})

router.get('/check', function(req, res) {
  console.log(req.flash('age'), req.flash('name'));
  res.send("check it in terminal")
})



module.exports = router;

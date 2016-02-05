var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/find/cartwheel/products', function(req, res, next) {
  res.json({"Start":"here"});
});

module.exports = router;

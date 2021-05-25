var express = require('express');
var router = express.Router();

const { row, rows } = require("../util/pg")

/* GET home page. */
router.get('/', async function(req, res, next) {

  const product = await rows('select * from products')
  console.log(product);
  res.render('index', { title: 'Express' });
});

module.exports = router;

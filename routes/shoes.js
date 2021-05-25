var express = require('express');
var router = express.Router();

const { rows } = require("../util/pg")

const productsSQL = `
  select * from products where product_new = false and product_rating = 5
`

router.get('/', async function(req, res, next) {

  const products = await rows(productsSQL)

  res.render('shoes', {products});
});

module.exports = router;

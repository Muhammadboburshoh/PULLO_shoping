var express = require('express');
var router = express.Router();

const { row, rows } = require("../util/pg")

const introSQL = `
  select * from products where product_new = true and product_rating = 5
`

const bestProductSQL = `
  select * from products where product_new = true and product_rating > 5
`

const productsSQL = `
  select * from products where product_new = false and product_rating = 5
`

/* GET home page. */
router.get('/', async function(req, res, next) {

  const introProduct = await rows(introSQL)
  const bestProduct = await row(bestProductSQL)
  const products = await rows(productsSQL)
  console.log(products);

  res.render('index', { introProduct, bestProduct, products });
});

module.exports = router;

var express = require('express');
var router = express.Router();

const { row } = require("../util/pg")

const bestProductSQL = `
  select * from products where product_new = true and product_rating > 5
`

router.get('/', async function(req, res, next) {

  const bestProduct = await row(bestProductSQL)

  res.render('racingBoots', {bestProduct});
});

module.exports = router;

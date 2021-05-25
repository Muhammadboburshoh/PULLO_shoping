var express = require('express');
var router = express.Router();

const { rows } = require("../util/pg")


const introSQL = `
  select * from products where product_new = true and product_rating = 5
`


router.get('/', async function(req, res, next) {

  const introProduct = await rows(introSQL)

  res.render('collection', {introProduct});
});

module.exports = router;

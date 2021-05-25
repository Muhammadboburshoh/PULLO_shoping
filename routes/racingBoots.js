var express = require('express');
var router = express.Router();

const { row } = require("../util/pg")

router.get('/', async function(req, res, next) {

  const bestProduct = await row(bestProductSQL)

  res.render('racingBoots');
});

module.exports = router;

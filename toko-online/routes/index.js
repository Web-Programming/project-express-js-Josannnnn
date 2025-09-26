var express = require('express');
var router = express.Router();
var products = require('../data/product.json');

// GET home page
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Toko Online Anjay Mabar',
    products: products
  });
});

router.get('/search', function (req, res, next) {
  const q = req.query.q ? req.query.q.toLowerCase() : "";

  let filteredProducts = products;
  if (q) {
    filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(q)
    );
  }

  res.render('index', {
    title: q ? `Hasil pencarian untuk: "${q}"` : 'Daftar Produk',
    products: filteredProducts,
    query: req.query.q || ""
  });
});

module.exports = router;

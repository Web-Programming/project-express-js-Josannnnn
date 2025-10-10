var express = require('express');
var router = express.Router();
var products = require('../../data/product.json');

// GET search
router.get('/search', function (req, res, next) {
  const q = (req.query.q && req.query.q !== 'null')
    ? req.query.q.toLowerCase()
    : "";

  let filteredProducts;

  if (!q) {
    // Jika query kosong, tampilkan semua produk
    filteredProducts = products;
  } else {
    // Filter produk berdasarkan nama
    filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(q)
    );
  }

  res.render('index', {
    title: 'Hasil Pencarian',
    products: filteredProducts,
    query: req.query.q || "" // agar nilai input pencarian tidak hilang
  });
});

// Halaman utama
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Toko Online Sederhana',
    products: products,
    query: "" // default kosong
  });
});

module.exports = router;

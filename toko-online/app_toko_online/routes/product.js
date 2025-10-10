var express = require('express');
var router = express.Router();
var products = require('../../data/product.json');
var Product = require('../models/product');

// route test
router.get('/all', async function(req, res, next) {
    try {
        const prod = await Product.find({}); // untuk mengambil seluruh data dari collection
        res.render('index', {
            title: 'Toko Online Sederhana',
            products: prod
        });
    } catch (err) {
        res.status(500).send('Gagal memuat produk');
    }
});
router.get('/tst', function(req, res, next) {
    res.send('respond with a resource');
});
    
// route untuk menampilkan semua produk

module.exports = router;

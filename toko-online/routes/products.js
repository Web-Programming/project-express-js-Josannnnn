var express = require("express");
var router = express.Router();
var products = require("../data/product.json"); // ubah jadi plural biar tidak tabrakan

// route dengan parameter :id
router.get("/:id", function (req, res, next) {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).send('Produk tidak ditemukan!');
    }

    res.render('product-detail', {
        title: product.name,
        product: product
    });
});

module.exports = router;

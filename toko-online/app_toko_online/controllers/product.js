var product = require('../../data/product.json');
var product =require("../models/product");
const index = async (req, res) =>{
    try {
        const prod = await Product.find({});
        res.render('index', {
            title : 'Toko Online Sederhana = ini dari mongodb',product: prod
        });
    

    }
}
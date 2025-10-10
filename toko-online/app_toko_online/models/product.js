const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true, "Nama produk harus di isi"],
        trim: true,
    },
    price: {
        type : Number,
        required : [true, "Harga produk harus di isi"],
        min: [1000,"Harga produk minimal 1000"]
        //max: [1000,"Harga produk minimal 1000"]
    },
    description:{
        type : String,
        required : false,
    },
    stock:{
        type : Number,
        default: 0, //memberikan nilai bawaan/default
    },
    createAt:{
        type : Date,
        default : Date.now
    }
});

const Product = mongoose.model('product', ProductSchema,);


module.exports = Product;
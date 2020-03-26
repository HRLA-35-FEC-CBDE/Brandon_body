const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  productId:Number,
  category: String,
  subCategory: String,
  categoryType: String,
  company: String,
  title: String,
  price: Number,
  itemNumber: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

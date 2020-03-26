var db = require('../db/product.js');


module.exports = {
  products: {
    // fetch item
    getProduct: (userId) => db.find({productId:userId.id})
  }
};
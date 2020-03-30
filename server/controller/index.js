const model = require('../model');

const controller = {
  products: {
    get: (req, res) => {
      model.products.getProduct(req.params)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(400).send(err);
      })
    }
  },
  images: {
    get: (req,res) => {
     
     
    }
  }
}

module.exports = controller;
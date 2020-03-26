var routes = require('express').Router();
const controller = require('./controller')

routes.get('/item/:id', controller.products.get);
routes.get('/images', controller.images.get);

module.exports = routes; 
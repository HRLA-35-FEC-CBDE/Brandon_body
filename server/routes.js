var routes = require('express').Router();
const controller = require('./controller')

routes.get('/item/:id', controller.products.get);


module.exports = routes; 
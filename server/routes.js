var routes = require('express').Router();

routes.get('/items', (req, res) => res.send('hello world'));


module.exports = routes; 
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes.js');

const app = express();
const port = 3002;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(morgan('dev'));
app.use(routes);




app.listen(port, () => console.log('app is listening on port 3002'));
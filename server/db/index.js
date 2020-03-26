const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reibody', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection to the Mongoose database successful!');
});

module.exports = db;

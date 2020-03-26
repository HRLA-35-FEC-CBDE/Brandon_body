const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/reibody';

const db = mongoose.connect(mongoUri);

module.exports = db;
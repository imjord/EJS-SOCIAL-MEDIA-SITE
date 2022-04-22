const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/robustbackend');



module.exports = mongoose.connection;
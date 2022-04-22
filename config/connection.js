const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://imjord:imjord123@cluster0.da5bc.mongodb.net/simple-posts?retryWrites=true&w=majority');



module.exports = mongoose.connection;

const mongoose = require('mongoose');
require('dotenv').config()


mongoose.connect("mongodb+srv://imjord:imjord123@cluster0.mkbgsyb.mongodb.net/?retryWrites=true&w=majority");



module.exports = mongoose.connection;
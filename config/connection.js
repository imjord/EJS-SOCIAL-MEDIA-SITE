
const mongoose = require('mongoose');
require('dotenv').config()


mongoose.connect(process.env.MONGO_URI);



module.exports = mongoose.connection;
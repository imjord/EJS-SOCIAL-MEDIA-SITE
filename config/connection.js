
const mongoose = require('mongoose');
require('dotenv').config()


mongoose.connect(process.env.MYDBKEY);



module.exports = mongoose.connection;
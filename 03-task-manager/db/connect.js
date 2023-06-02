const mongoose = require('mongoose');

const connectionString = ""

const connectDb = (url) => {
   return mongoose.connect(connectionString)
}

module.exports = connectDb
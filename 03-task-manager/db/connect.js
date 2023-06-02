const mongoose = require('mongoose');

const connectionString = "mongodb+srv://Babykoko:V2lRAoKiym2TqoUg@cluster0.1gqmign.mongodb.net/Task-Manager?retryWrites=true&w=majority"

const connectDb = (url) => {
   return mongoose.connect(connectionString)
}

module.exports = connectDb
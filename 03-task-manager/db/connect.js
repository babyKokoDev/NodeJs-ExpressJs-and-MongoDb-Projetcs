const mongoose = require('mongoose');

const connectionString = "mongodb+srv://Babykoko:V2lRAoKiym2TqoUg@cluster0.1gqmign.mongodb.net/Task-Manager?retryWrites=true&w=majority"

mongoose.connect(connectionString)
.then(()=>console.log("Connected to the DB..."))
.catch(err=>console.log(err))
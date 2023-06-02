const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
     name : String,
     completed : Boolean
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
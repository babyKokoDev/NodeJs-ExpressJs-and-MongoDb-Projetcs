const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
     name : {
        type : String,
        required : [true, 'name must be provided'],
        trim : true
     },
     completed : Boolean
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
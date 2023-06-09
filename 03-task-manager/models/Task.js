const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
     name : {
      type : String,
      required : [true, "Must provide a name"],
      trim : true,
      maxlength : [20, "Name cannot be more than 20 characters"]
     },
     completed : {
        type : Boolean,
        default : false
     }
})

const Task = mongoose.model('tasks', TaskSchema)

module.exports = Task
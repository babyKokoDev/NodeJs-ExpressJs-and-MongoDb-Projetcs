const asyncWrapper = require('../middleware/async')
const Task = require('../models/Task')

const getAllTasks = asyncWrapper ( async (req, res) => {
       const task = await Task.find({}) 
       res.status(200).json({task})
})

const createTask = asyncWrapper ( async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
})

const getTask = asyncWrapper ( async (req, res, next) => {
      const {id : TaskId} = req.params
      const task = await Task.findOne({_id : TaskId})
      if (!task){
        const error = new Error('Not Found')
        error.status = 404
        next(error)
        return res.status(404).json({msg : `No task in id ${TaskId}`})
      }
      res.status(200).json({ task })
})

const deleteTask = asyncWrapper ( async (req, res) => {
          const {id : taskId} = req.params
          const task = await Task.findOneAndDelete({_id : taskId})
          if (!task) {
            return res.status(404).json({msg : `No task in id ${TaskId}`})
          }
          res.status(200).json({task})
})

const updateTasks = asyncWrapper ( async (req, res) => {
        const {id : taskId} = req.params
        const task = await Task.findOneAndUpdate({_id : taskId}, req.body, {
            new : true,
            runValidators : true
        })
        if (!task) {
            return res.status(404).json({msg : `No task in id ${TaskId}`})
          }
        res.status(200).json({task})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTasks,
    deleteTask
}
const asyncWrapper = require('../middleware/async')
const Task = require('../models/Task')
const { createCustomError, CustomAPIError } = require('../errors/custom-error')


const getAllTasks = asyncWrapper ( async (req, res) => {
       const task = await Task.find({}) 
       res.status(200).json({tasks : task})
})

const createTask = asyncWrapper ( async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ tasks : task })
})

const getTask = asyncWrapper ( async (req, res, next) => {
      const {id : TaskId} = req.params
      const task = await Task.findOne({_id : TaskId})
      if (!task){
         return next(createCustomError(`No task in id : ${TaskId}`, 404))
      }
      res.status(200).json({ tasks : task })
})

const deleteTask = asyncWrapper ( async (req, res, next) => {
          const {id : taskId} = req.params
          const task = await Task.findOneAndDelete({_id : taskId})
          if (!task) {
            return next(createCustomError(`No task in id : ${taskId}`, 404))
          }
          res.status(200).json({tasks : task})
})

const updateTasks = asyncWrapper ( async (req, res, next) => {
        const {id : taskId} = req.params
        const tasks = await Task.findOneAndUpdate({_id : taskId}, req.body, {
            new : true,
            runValidators : true
        })
        if (!tasks) {
            return next(createCustomError(`No task in id : ${taskId}`, 404))
          }
        res.status(200).json({tasks : tasks})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTasks,
    deleteTask
}
const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
       const task = await Task.find({}) 
       res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ msg: error })
    }   
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getTask = async (req, res) => {
    try {
      const {id : TaskId} = req.params
      const task = await Task.findOne({_id : TaskId})
      if (!task){
        return res.status(404).json({msg : `No task in id ${TaskId}`})
      }
      res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTasks = (req, res) => {
    res.send('Update Tasks')
}

const deleteTask = (req, res) => {
    res.send('Delete Tasks')
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTasks,
    deleteTask
}
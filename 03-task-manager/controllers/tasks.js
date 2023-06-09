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

const getTask = (req, res) => {
    res.json({ id: req.params.id })
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
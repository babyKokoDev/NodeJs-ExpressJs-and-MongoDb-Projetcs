const express = require('express')
const { getAllTasks, createTask, getTask, updateTasks, deleteTask } = require('../controllers/tasks')
const router = express.Router()


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTask)

module.exports = router
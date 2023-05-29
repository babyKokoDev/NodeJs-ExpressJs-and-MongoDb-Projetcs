const getAllTasks = (req, res) => {
    res.send('Get all tasks')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
   res.json({ id : req.params.id})
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
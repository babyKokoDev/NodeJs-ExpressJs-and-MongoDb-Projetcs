const getAllTasks = (req, res) => {
    res.send('Get all tasks')
}

const createTask = (req, res) => {
    res.send('Create Tasks')
}

const getTask = (req, res) => {
    res.send('Get Single Task')
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
const models = require('../models/dataModel');

const taskController = {};

// ------------------ all the middleware
taskController.createTask = async (req, res, next) => {
    try {
        console.log('We have entered the create task controller');
        await models.Task.create(req.body)
        return next()
    } catch (error) {
        console.log('There was an error deleting the user')
        return next(error)
    }
}

taskController.deleteTask = async (req, res, next) => {
    try {
        console.log('We have entered the delete task controller');
        await models.Task.deleteOne(req.body)
        return next()
    } catch (error) {
        console.log('There was an error creating the task')
        return next(error)
    }
}

taskController.updateTask = async (req, res, next) => {
    try {
        console.log('We have entered the update task controller');
        //would want to take a look at req.body to create logic
        //around deciding what to search for
        //save data we're finding in an object 
        //https://mongoosejs.com/docs/api/model.html#model_Model.findOneAndUpdate
        await models.Task.findOneAndUpdate()
        return next()
    } catch (error) {
        console.log('There was an error creating the task')
        return next(error)
    }
}

taskController.createSummary = async (req, res, next) => {
    try {
        console.log('We have entered the create Summary controller');
        await models.Summary.create(req.body)
        return next()
    } catch (error) {
        console.log('There was an error creating the Summary')
        return next(error)
    }
}

taskController.deleteSummary = async (req, res, next) => {
    try {
        console.log('We have entered the delete Summary controller');
        await models.Summary.deleteOne(req.body)
        return next()
    } catch (error) {
        console.log('There was an error deleting the Summary')
        return next(error)
    }
}

// created new getAllTasks controller
// gotta pass the getAllTasks
taskController.getAllTasks = async (req, res, next) => {
    try {
        console.log('Entered into getAllTasks mw');
        models.User.findOne({name : 'Nate Tracy'}, 'task', (err, allTasks) => {
            if (err) {
                return next({
                    log: 'error in findOne in mongoose'
                })
            } 
            res.locals.taskData = allTasks;
            return next();
        })
        
    } catch (error) {
        console.log('Error in getAllTasks mw');
        return next(error)
    }
}

// ------------------ end of middleware

module.exports = taskController;

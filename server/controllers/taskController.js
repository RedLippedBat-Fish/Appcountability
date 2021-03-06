const models = require("../models/dataModel");
const express = require("express")
const cors = require("cors");
const app = express();
app.use(cors());
const taskController = {};

// ------------------ all the middleware
taskController.createTask = async (req, res, next) => {
  try {
    console.log("We have entered the create task controller");
    console.log(req.body);

    // console.log(req.params, "This is meant to be the req body");
    // // console.log(JSON.stringify(req.body));

    await models.Task.create(req.body);
    return next();


    // models.User.findOneAndUpdate({name : 'Nate Tracy'}, {$push: {task : req.body}}, (err, data) => {
    //   if (err) {
    //     console.log('error at findOneUpdate');
    //   } else {
    //     return next();
    //   }
    // })


  } catch (error) {
    console.log("There was an error deleting the user");
    return next(error);
  }
};

taskController.deleteTask = async (req, res, next) => {
  try {
    console.log("We have entered the delete task controller");
    await models.Task.deleteOne(req.body);
    return next();
  } catch (error) {
    console.log("There was an error creating the task");
    return next(error);
  }
};

taskController.updateTask = async (req, res, next) => {
  try {
    console.log("We have entered the update task controller");
    //would want to take a look at req.body to create logic
    //around deciding what to search for
    //save data we're finding in an object
    //https://mongoosejs.com/docs/api/model.html#model_Model.findOneAndUpdate
    await models.Task.findOneAndUpdate();
    return next();
  } catch (error) {
    console.log("There was an error creating the task");
    return next(error);
  }
};

taskController.createSummary = async (req, res, next) => {
  try {
    console.log("We have entered the create Summary controller");
    await models.Summary.create(req.body);
    return next();
  } catch (error) {
    console.log("There was an error creating the Summary");
    return next(error);
  }
};

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
        let search = {
          name : 'Nate Tracy'
        }
        models.Task.find({}, (err, allTasks) => {
            if (err) {
                return next({
                    log: 'error in findOne in mongoose'
                })
            } 
            console.log('within getAllTasks =', allTasks);
            console.log('get first getAllTasks =', allTasks[0]);
            
            res.locals.taskData = allTasks;
            return next();
        })
        
    } catch (error) {
        console.log('Error in getAllTasks mw');
        return next(error)
    }

  //   try {
  //     console.log('Entered into getAllTasks mw');
  //     let search = {
  //       name : 'Nate Tracy'
  //     }
  //     models.User.findOne(search, (err, allTasks) => {
  //         if (err) {
  //             return next({
  //                 log: 'error in findOne in mongoose'
  //             })
  //         } 
  //         console.log('within getAllTasks =', allTasks.task[0]);
  //         res.locals.taskData = allTasks;
  //         return next();
  //     })
      
  // } catch (error) {
  //     console.log('Error in getAllTasks mw');
  //     return next(error)
  // }
}


// ------------------ end of middleware

module.exports = taskController;

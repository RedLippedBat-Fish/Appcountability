const models = require('../models/dataModel');

const userController = {};

userController.resInvite = (req, res, next) => {
  // set name variable equal to req.body.name
  // set task variable equal to req.body.task

  // find the task with the name
  // toggle the boolean

  const name = req.body.name;  // ----> need from frontend
  const task = req.body.task;  // ----> need from frontend
  
  const findQuery = {
    'name' : name,
    'tasks.taskName' : task,
  }
  
  const toggle = {
    $set: {
      'tasks.accepted' : !tasks.accepted
    }
  }

  try {
    models.User.findOneAndUpdate(findQuery, toggle, (err, user) => {
      if (err) {
        return next ({
          log: 'error at user resInvite find',
        });
      } else {
        console.log('successfully toggled boolean');
        res.locals.invitationResponse = user;        
        return next();
      }
    });      
  } catch (err) {
    return next ({
      log: 'error at user resInvite middleware',
    })
  }
};

userController.getTasks = (req, res, next) => {
  const name = req.body.name;
  const query = {
    'name' : name,
  }

  try {
    models.User.find(query, (err, tasks) => {
      if (err) {
        return next ({
          log: 'error at user task find',
        })
      } else {
        console.log('successfully get the tasks of user');
        res.locals.taskData = tasks;
        return next();
      }     
    })
  } catch (err) {
    return next ({
      log: 'error at user getTasks middleware',
    })
  }
}


// ------------------ all the middleware

// ------------------ end of middleware

module.exports = userController;

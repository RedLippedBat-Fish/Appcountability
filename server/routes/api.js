const express = require("express");
const router = express.Router();

// ------------------ controllers import

const taskController = require("../controllers/taskController");
const userController = require("../controllers/userController");
const cookieController = require("../controllers/cookieController");

// ------------------ routes to the respective controllers

//NOTE: will we be sending things back in a request body or in the request parameters???

//get tasks from user for display
//res.locals.taskData should be an array of objects
router.get("/", userController.getTasks, (req, res) => {
  return res.status(200).json(res.locals.taskData);
});

//create task
//res.locals.taskData should return the newly created task?
router.post(
  "/newTask",
  taskController.createTask,
  // taskController.createSummary,
  (req, res) => {
    return res.status(200).json(res.locals.taskData);
  }
);

//update task
//res.locals.taskData should return newly updated task data
router.put("/updateTask", taskController.updateTask, (req, res) => {
  return res.status(200).json(res.locals.taskData);
});

//delete task
//res.locals.deletedTask should return deleted task data
//not sure if we want to invoke delete summary here though or if we are only deleting the task for that individual user
router.delete(
  "/deleteTask",
  taskController.deleteTask,
  taskController.deleteSummary,
  (req, res) => {
    return res.status(200).json(res.locals.deletedTask);
  }
);

//invitation handler
//res.locals.invitationResponse should tell the frontend if the response bool was true or false
router.put("/invitation", userController.resInvite, (req, res) => {
  return res.status(200).json(res.locals.invitationResponse);
});

module.exports = router;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://dbUser:dbUser@dsvisualizer.hbjjh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; // ------------------ Mongo URI place here

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'appaccountability'
})
  .then(() => console.log('Connected to mongoDB BOOYA'))
  .catch(err => console.log(err));


// ------------------ Schema 1 & Model 1 placeholder

const userSchema = new Schema({
  name: String,
  task: [{
    type: Schema.Types.ObjectId,
    ref: 'task'
  }]
});

const User = mongoose.model('user', userSchema);


// ------------------ Schema 2 & Model 2 placeholder

const taskSchema = new Schema({
  wagerAmount: Number,
  taskName: String,
  accepted: Boolean
});

const Task = mongoose.model('task', taskSchema);

// ------------------ Schema 3 & Model 3 placeholder
const summarySchema = new Schema({
  endDate: Date,
  description: String,
  createdBy: String,
  totalWagerAmount: Number
});

const Summary = mongoose.model('summary', summarySchema);

// ------------------ end of Schema

module.exports = {
  User,
  Task,
  Summary,
};
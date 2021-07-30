const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'placeholder'; // ------------------ Mongo URI place here

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

const oneSchema = new Schema({

});

const One = mongoose.model('one', oneSchema);


// ------------------ Schema 2 & Model 2 placeholder

const twoSchema = new Schema({

});

const Two = mongoose.model('two', twoSchema);

// ------------------ end of Schema

module.exports = {
  One,
  Two,
};
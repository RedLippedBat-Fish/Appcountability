const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); // --> new
const passport = require('passport'); // --> new
const cookieSession = require('cookie-session'); // --> new
require('./passport-setup'); // --> new

const PORT = 3000;

// ------------------ api router
const apiRouter = require('./routes/api');

// ------------------ boiler plate

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(cookieParser());
app.use(cors()) // --> new for GOauth
app.use(passport.initialize()); // --> new for GOauth
app.use(passport.session()); // --> new for GOauth

// ------------------ all the routes to api 


// ------------------ Google OAuth

app.use(cookieSession({
  name: 'appAcct-session',
  keys: ['key1', 'key2']
}))

// move to middleware later
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    return next ()
  } else {
    // res.sendStatus(401);
    return next (); 
  }
}

app.get('/', (req, res) => res.send('You are not logged in!'));
app.get('/failed', (req, res) => res.send('your login failed'));
app.get('/success', isLoggedIn, (req, res) => res.send(`welcome mr ${req.user.displayName}`));


app.get('/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/success',
        failureRedirect: '/failed'
}));

app.get('/logout', (req, res) => {
  // destroy the session
  req.session = null;
  // log them out from passport
  req.logout();
  res.redirect('/');
})

// ------------------ global error handler & listening route

app.use('*', (req, res) => {
  res.status(404).send('Route not Found');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;

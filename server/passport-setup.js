const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;

/* correct way once DB User is setup
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // using the cookie received, find & put entire user req.user 
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID:     '311910910792-29j744fvip255poic0uf8km7e53ktrer.apps.googleusercontent.com',
    clientSecret: 'fv-ZrYkKTPn_YOg5JKJPF1oV',
    callbackURL: 'http://localhost:3000/google/callback',
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // use profile info ID to check if user is registered in ur db
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
*/ 

// -------- hacked way until database setup
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  // using the cookie received, find & put entire user req.user 
  // User.findById(id, function(err, user) {
    done(null, obj);
  // });
});

passport.use(new GoogleStrategy({
    clientID:     '311910910792-29j744fvip255poic0uf8km7e53ktrer.apps.googleusercontent.com',
    clientSecret: 'fv-ZrYkKTPn_YOg5JKJPF1oV',
    callbackURL: 'http://localhost:3000/api/auth/google/callback',
    // passReqToCallback   : true
  },
  function(accessToken, refreshToken, profile, done) {
    /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
     If yes select the user and pass him to the done callback
     If not create the user and then select him and pass to callback
    */
   userProfile = profile;
    return done(null, userProfile);
  }
));

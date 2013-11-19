var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ "id": id }, function(err, user) {
    done(null, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    console.log('checkingsss...');
    User.findOne({ "email": email }, function(err, user) {
        if(err || !user){
          console.log("No User!!");
          done(null, false, { message: 'Incorrect email.' });
        }else{
          if(password===user.password){
            console.log("Success!");
            done(null, user);
          }else{
            console.log("No Password");
            done(null, false, { message: 'Incorrect password.' });
          }
        }
    });


  }
));


// TODO: sails.config.express  use?

module.exports.express = {
    customMiddleware: function (app) {
		app.use(passport.initialize());
		app.use(passport.session());
	}
};

module.exports.passport = passport;


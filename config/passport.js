var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;



var adminUser={
    	name: "tyler slater",
    	username: 'tyler',
    	password: 'red',
    	id: 1
    };

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ "id": id }, function(err, user) {
    done(null, user);
  });
});

passport.use(new LocalStrategy(
  function(email, password, done) {

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

module.exports.express = {
    customMiddleware: function (app) {
		app.use(passport.initialize());
		app.use(passport.session());
	}
};

module.exports.passport = passport;


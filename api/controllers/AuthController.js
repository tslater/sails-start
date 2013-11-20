/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */


var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


module.exports = {
    
  login: passport.authenticate('local', { 
				successRedirect: '/auth/isLoggedIn',
				failureRedirect: '/auth/isLoggedIn'
	}),

  logout: function(req, res){
	  req.logout();
	  res.redirect('/auth/isLoggedIn');
  },

  success: function(req,res){
    res.send("Successss!");
  },

  isLoggedIn : function(req, res){
    if(req.user){
      req.user.isLoggedIn = true;
      delete req.user.password;
      res.send(req.user);
    }else{
      var user = {
        isLoggedIn : false,
        email : ''
      };
      res.send(user);
    }
  },

  unauthorized: function(req, res){
    req.logout();
  	res.send();
  },
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AuthController)
   */
  _config: {}

  
};

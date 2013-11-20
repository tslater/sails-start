/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {
	console.log(req.user);
	console.log(req.query);
	console.log(req.body);
  if (!req.user) {
		res.forbidden('You are not permitted to perform this action.')
  }

  req.userId = req.user.id;

  if(_.isObject(req.body)){
  	req.body.userId = req.user.id;
  }
  
  return next();
};

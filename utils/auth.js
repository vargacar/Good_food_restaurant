const withAuth = (req, res, next) => {

    if (!req.session.isLogedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  
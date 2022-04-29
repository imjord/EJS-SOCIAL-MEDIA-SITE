// auth routes

module.exports = {
    ensureAuth: function(req,res,next){
        if(req.isAuthenticated()){
            return next()
        }
        req.flash('error_msg', 'Please log in to view that resource');
        res.redirect('/login')
    },
    forwardAuth: function(req,res,next){
        if(!req.isAuthenticated()){
            return next();
        }
        res.redirect('/homepage')
    }
}
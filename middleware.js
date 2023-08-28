const session = require('express-session');
module.exports = function(req , res ,next){
    if(req.session && req.session.user || req.body.submit == 'Generate Short URL' ){
       return next();
    }
    // console.log(req.body);
    req.session.addUrl = req.body;
    // console.log(req.session.addUrl);
    return res.redirect('/login');
}
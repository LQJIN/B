var user_model = require('../models/user_model');

exports.index = function (req,res,next) {
/*res.render('index',{title:'Express'});*/
    res.send('跨域请求，请求所有的文章数据。');
};

exports.reg = function (req,res,next) {
    user_model.insertUser(function (result) {
        console.log(result);
    });
};
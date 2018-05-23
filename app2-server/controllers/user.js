var user_model = require('../models/user_model');

/*检查用户名是否存在*/
exports.check_account = function (req,res,next) {
    /*res.render('index',{title:'Express'});*/
    var Account = req.query.Account;//获取要查询的账户名
    user_model.checkAccount (Account, function (result) {
        //return res.send(result);
        return res.json(result);
    });
};
/*插入用户账号*/
exports.insert_account = function (req, res, next) {
    /*var account = req.query.account;//获取账户名
    var password = req.query.password;//获取密码*/
    var account = req.body.account;//获取账户名
    var password = req.body.password;//获取密码
    user_model.insertAccount (account, password, function (result) {
        req.session.id = result[0].userid;
        return res.json(result);
    });
};
/*登陆*/
exports.sign_in = function (req, res, next) {
    var account = req.body.account;//获取账户名
    var password = req.body.password;//获取密码
    user_model.signIn (account, password, function (result) {
        return res.json(result);
    });
};
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

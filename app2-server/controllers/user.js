var user_model = require('../models/user_model');
var news_model = require('../models/news_model');

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
        return res.json(result);
    });
};
/*登陆*/
exports.sign_in = function (req, res, next) {
    var account = req.body.account;//获取账户名
    var password = req.body.password;//获取密码
    user_model.signIn (account, password, function (result) {
        //res.cookie("account", {account: result}, {maxAge: 60000});
        req.session.id = result[0].userid;
        //console.log(result);
        return res.json(result);
    });
};
/*查询用户id*/
exports.account_by_id = function (req,res,next) {
    var accountId = req.body.id;//获取要查询的id
    user_model.accountById (accountId, function (result) {
        //return res.send(result);
        return res.json(result);
    });
};

/*加载管理员登陆页*/
exports.serverLogin = function (req, res, next){
    res.render('login.ejs');
};
/*管理员登陆操作*/
exports.serverDoLogin = function (req, res, next){
    var servername = req.body.username;
    var password = req.body.password;
    user_model.getNameByPassword(servername,password,function (result) {
        if(result.length > 0) {
            req.session.name = result[0].servername;
            news_model.getNewsCommentTag(function (results) {
                res.render('article',{
                    'name':req.session.name,
                    'posts':results
                });
            });
        }else{
            res.send('login fail');
        }
    }
)};
/*管理文章*/
exports.serverArticle = function (req, res, next) {
    news_model.getNewsCommentTag(function (results) {
        res.render('article', {
            'name': req.session.name,
            'posts': results
        });
    });
};
/*增加文章*/
exports.addArticle = function (req, res, next){
    res.render('addArticle.ejs');
};
exports.addDoArticle = function (req, res, next){
    var title = req.body.title;
    var content = req.body.content;
    var tag = req.body.tag;
    var time = new Date();
    var nowTime = time.toLocaleDateString(); //获取当前日期
    news_model.insertArticle(title,content,tag,nowTime,function (result) {
        console.log(result);
        if(result.affectedRows > 0) {
            res.redirect('/users/server_article');
        }
    });
};
/*删除文章*/
exports.deleteArticle = function (req, res, next){
    var articleid = req.params.nid;
    news_model.deleteArticle(articleid,function (result) {
        if(result.affectedRows > 0) {
            res.redirect('/users/server_article');
        }
    });
};
/*管理标签*/
exports.serverTag = function (req, res, next){
    news_model.getTag(function (results) {
        res.render('tag', {
            'posts': results
        });
    });
};
exports.addTag = function (req, res, next){
    res.render('addTag.ejs');
};
exports.addDoTag = function (req, res, next){
    var title = req.body.title;
    news_model.insertTag(title,function (result) {
        console.log(result);
        if(result.affectedRows > 0) {
            res.redirect('/users/server_tag');        }
    });
};
exports.deleteTag = function (req, res, next){
    var tagid = req.params.tagid;
    news_model.deleteTag(tagid,function (result) {
        if(result.affectedRows > 0) {
            res.redirect('/users/server_tag');
        }
    });
};

/*管理评论*/
exports.serverComment = function (req, res, next){
    news_model.getComment(function (results) {
        res.render('comment', {
            'posts': results
        });
    });
};
exports.deleteComment = function (req, res, next){
    var cid = req.params.cid;
    news_model.deleteComment(cid,function (result) {
        if(result.affectedRows > 0) {
            res.redirect('/users/server_comment');
        }
    });
};
/*管理用户*/
exports.serverUser = function (req, res, next){
    news_model.getAllUser(function (results) {
        res.render('user', {
            'posts': results
        });
    });
};
exports.addUser = function (req, res, next){
    res.render('addUser.ejs');
};
exports.addDoUser = function (req, res, next){
    var account = req.body.account;
    var password = req.body.password;
    news_model.insertUser(account,password,function (result) {
        if(result.affectedRows > 0) {
            res.redirect('/users/server_user');        }
    });
};
exports.deleteUser = function (req, res, next){
    var userid = req.params.userid;
    news_model.deleteUser(userid,function (result) {
        if(result.affectedRows > 0) {
            res.redirect('/users/server_user');
        }
    });
};
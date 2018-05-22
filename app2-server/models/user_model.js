var db = require('./db.js');

exports.checkAccount = function (Account, callback) {
    var sql = "select count(user_id) from users where account = ? ";
    db.query(sql,[Account],callback);
};
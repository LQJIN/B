var express = require('express');
var router = express.Router();

var user = require('../controllers/user.js');
var news = require('../controllers/news.js');


/*最开始设置的跨域访问*/

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8088");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


/*设置跨域访问
链接：http://www.jianshu.com/p/ba4ccf3110be
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/

/* GET home page. */
router.get('/index', news.index);

/* GET reg page. */
router.get('/reg',user.reg);

module.exports = router;

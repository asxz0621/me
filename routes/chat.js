var express = require('express');
//定义路由级中间件
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/', (req, res) => res.render('./index'));
module.exports = router;
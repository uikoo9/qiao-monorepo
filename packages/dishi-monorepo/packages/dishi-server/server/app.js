var qiaoIndexJs = require('./middleware/qiao.index.js');

// start server
qiaoIndexJs.server({
	root : __dirname,
	port : require('./config/config.json').port
});
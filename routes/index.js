var express = require('express');
var router = express.Router();
var cmdHandle = require('../public/cmdHandle.js');
var cmds = require('../public/cmds.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('public/index.html');
});

/*POST for terminal commands*/
router.post('/', function(req, res, next) {
	console.log(req.body.cmd);
	console.log(cmdHandle(req.body.cmd, cmds));
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({
		'res' : cmdHandle(req.body.cmd, cmds)
	}));

});

module.exports = router;

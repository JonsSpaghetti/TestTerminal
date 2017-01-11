var http = require('http');
http.createServer(function(req, res){
	var buffer = '';
	if (req.method == 'OPTIONS') {
		res.sendStatus(200);
	}
	if (req.method == 'POST'){
		req.on('data', function(chunk) {
			console.log('Data received.');
			buffer += chunk;
		});
		req.on('end', function() {
			console.log(buffer);
		});
	}
}).listen(3000);
console.log("server running on port 3000.");

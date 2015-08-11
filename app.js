var connect = require('connect'), 
	serveStatic = require('serve-static'),
	port = 3000;

connect().use(serveStatic(__dirname)).listen(port, function () {
	console.log('Server starts in the port of ', port);
});
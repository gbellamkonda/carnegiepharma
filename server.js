var express  = require('express');  
var http  = require('http'); 
var app      = express();
 
app.configure(function() {
	app.use(express.static(__dirname + '/')); 		// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(express.bodyParser()); 							// pull information from html in POST
	app.use(express.methodOverride()); 						// simulate DELETE and PUT
}); 
 
var server = http.createServer(app).listen(process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000);
console.log("App listening on port"+server.address().port);

app.get('/', function(req, res) {
	res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


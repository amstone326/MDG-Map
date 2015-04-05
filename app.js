var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var engine = require('ejs-locals');
var bodyParser = require('body-parser');
var session = require('express-session');
var mapRoute, extrasRoute;

app.set('port', process.env.PORT || 8080);
app.engine('ejs', engine);
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use( express.static( path.join( __dirname, 'public' )));

initRoutes('routes', function() {
	app.get('/', mapRoute.rate1A);
	//Routes for rate layers
	app.get('/rate1A', mapRoute.rate1A);
	app.get('/rate1B', mapRoute.rate1B);
	app.get('/rate1C', mapRoute.rate1C);
	app.get('/rate2A', mapRoute.rate2A);
	app.get('/rate3A', mapRoute.rate3A);
	app.get('/rate4A', mapRoute.rate4A);
	app.get('/rate5A', mapRoute.rate5A);
	app.get('/rate5B', mapRoute.rate5B);
	app.get('/rate6A', mapRoute.rate6A);
	app.get('/rate6B', mapRoute.rate6B);
	//Routes for status layers
	app.get('/status1A', mapRoute.status1A);
	app.get('/status1B', mapRoute.status1B);
	app.get('/status1C', mapRoute.status1C);
	app.get('/status2A', mapRoute.status2A);
	app.get('/status3A', mapRoute.status3A);
	app.get('/status4A', mapRoute.status4A);
	app.get('/status5A', mapRoute.status5A);
	app.get('/status5B', mapRoute.status5B);
	app.get('/status6A', mapRoute.status6A);
	app.get('/status6B', mapRoute.status6B);
	app.get('/info', extrasRoute.info);
	http.createServer(app).listen(app.get('port'), function() {
			 console.log( 'Open browser to http://localhost:' + app.get( 'port' ));
	});
});							
											
// Initialize all route handlers in different .js files
var fs = require('fs');
function initRoutes(rootDir, callback) {
	var mapFile = path.join(rootDir, "map.js");
	var extrasFile = path.join(rootDir, "extras.js");
	mapRoute = require('./' + mapFile);
	extrasRoute = require('./' + extrasFile);
	
	mapRoute.init(function() {
		extrasRoute.init(function () {
			callback();
		});
	});
}

/**
 * MDGMap map routes
 */

exports.init = function(callback) {
	console.log("MAP ROUTE INITALIZED");
	callback();
};

exports.map = function(req, res) {
	console.log("MAP ROUTE CALLED");
	res.render('map', {title:"Map"});
};

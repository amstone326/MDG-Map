/**
 * MDGMap map routes
 */

exports.init = function(callback) {
	callback();
};

exports.rate1A = function(req, res) {
	res.render('1A_rate', {title:"Map"});
};

exports.rate1B = function(req, res) {
	res.render('1B_rate', {title:"Map"});
};

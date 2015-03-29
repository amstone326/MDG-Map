/**
 * MDGMap extras routes
 */

exports.init = function(callback) {
	callback();
};

exports.info = function(req, res) {
	res.render('background_info', {title:"Background on MDGs"});
};

exports.sources = function(req, res) {
	res.render('sources', {title:"Sources"});
};

exports.report = function(req, res) {
	res.render('report', {title:"Report"});
};
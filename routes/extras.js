/**
 * MDGMap extras routes
 */

exports.init = function(callback) {
	callback();
};

exports.report = function(req, res) {
	res.render('report', {title:"Report"});
};

exports.mapExplanation = function(req, res) {
	res.render('map_explanation', {title:"What is the MDG-Map Project?"});
};

exports.mdgExplanation = function(req, res) {
	res.render('mdg_explanation', {title:"What are the MDGs?"});
};
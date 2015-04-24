/**
 * MDGMap extras routes
 */

exports.init = function(callback) {
	callback();
};

exports.report = function(req, res) {
	res.render('report', {title:"Full Report"});
};

exports.mapExplanation = function(req, res) {
    res.render('map_explanation', {title:"What is MDG-Map?"});
};

exports.measuring = function(req, res) {
	res.render('measuring', {title: "Measuring the MDGs"});
}

exports.mdgExplanation = function(req, res) {
	res.render('mdg_explanation', {title:"What are the Millennium Development Goals?"});
};
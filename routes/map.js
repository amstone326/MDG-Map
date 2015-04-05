/**
 * MDGMap map routes
 */

exports.init = function(callback) {
	callback();
};

exports.rate = function(req, res) {
	var mapId = req.params.mapId;
	var targetNum = req.params.targetNum;
	var statusMapId = req.params.statusMapId;
	console.log(mapId);
	console.log(targetNum);
	console.log(statusMapId);
	res.render('rate', {mapId:mapId, statusMapId:statusMapId, targetNum:targetNum});
};

exports.status = function(req, res) {
	var mapId = req.params.mapId;
	var targetNum = req.params.targetNum;
	var rateMapId = req.params.rateMapId;
	res.render('status', {mapId:mapId, rateMapId:rateMapId, targetNum:targetNum});
};

exports.mapExplanation = function(req, res) {
	res.render('map_explanation', {title:"How it Works"});
};
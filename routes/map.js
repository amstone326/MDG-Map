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
	res.render('rate', {mapId:mapId, statusMapId:statusMapId, targetNum:targetNum, title:"Rate Layer"});
};

exports.status = function(req, res) {
	var mapId = req.params.mapId;
	var targetNum = req.params.targetNum;
	var rateMapId = req.params.rateMapId;
	res.render('status', {mapId:mapId, rateMapId:rateMapId, targetNum:targetNum, title:"Status Layer"});
};

exports.mapExplanation = function(req, res) {
	res.render('map_explanation', {title:"How it Works"});
};
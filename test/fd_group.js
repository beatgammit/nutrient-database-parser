(function () {
	"use strict";

	var fileName = "../FD_GROUP.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = ['FdGrp_Cd', 'FdGrp_Desc'];

	console.log('[');
	parser(fileName, format, function (entry) {
		if (!bFirst) {
			console.log(',');
		}

		bFirst = false;

		console.log(entry);
	}, function () {
		console.log("]");
	});
}());

(function () {
	"use strict";

	var fileName = "../DERIV_CD.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = [
			'Deriv_Cd',
			'Deriv_Desc'
		];

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

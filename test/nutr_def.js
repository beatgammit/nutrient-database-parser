(function () {
	"use strict";

	var fileName = "../NUTR_DEF.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = [
			'Nutr_No',
			'Units',
			'Tagname',
			'NutrDesc',
			'Num_Dec',
			'SR_Order'
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

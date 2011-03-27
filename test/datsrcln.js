(function () {
	"use strict";

	var fileName = "../DATSRCLN.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = [
			'NDB_No',
			'Nutr_No',
			'DataSrc_ID'
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

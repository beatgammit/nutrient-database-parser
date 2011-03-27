(function () {
	"use strict";

	var fileName = "../FOOTNOTE.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = [
			'NDB_No',
			'Footnt_No',
			'Footnt_Typ',
			'Nutr_No',
			'Footnt_Txt'
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

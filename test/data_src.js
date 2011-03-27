(function () {
	"use strict";

	var fileName = "../DATA_SRC.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = [
			'DataSrc_ID',
			'Authors',
			'Title',
			'Year',
			'Journal',
			'Vol_City',
			'Issue_State',
			'Start_Page',
			'End_Page'
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

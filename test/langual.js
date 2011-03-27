(function () {
	"use strict";

	var fileName = "../LANGUAL.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = ['NDB_No', 'Factor_Code'];

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

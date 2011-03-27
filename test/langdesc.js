(function () {
	"use strict";

	var fileName = "../LANGDESC.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = ['Factor_Code', 'Description'];

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

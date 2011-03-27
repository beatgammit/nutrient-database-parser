(function () {
	"use strict";

	var fileName = "../FOOD_DES.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = ['NDB_No', 'FdGrp_Cd', 'Long_Desc', 'Shrt_Desc'];

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

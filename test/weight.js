(function () {
	"use strict";

	var fileName = "../WEIGHT.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = [
			'NDB_No',
			'Seq',
			'Amount',
			'Msre_Desc',
			'Gm_Wgt',
			'Num_Data_Pts',
			'Std_Dev'
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

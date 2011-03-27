(function () {
	"use strict";

	var fileName = "../NUT_DATA.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = [
			'NDB_No',
			'Nutr_No',
			'Nutr_Val',
			'Num_Data_Pts',
			'Std_Error',
			'Src_Cd',
			'Deriv_Cd',
			'Ref_NDB_No',
			'Add_Nutr_Mark',
			'Num_Studies',
			'Min',
			'Max',
			'DF',
			'Low_EB',
			'Up_EB',
			'Stat_cmt',
			'CC'
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

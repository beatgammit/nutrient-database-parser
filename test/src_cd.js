(function () {
	"use strict";

	var fileName = "../SRC_CD.txt",
		parser = require('../lib/parser'),
		bFirst = true,
		format = [
			'Src_Cd',
			'SrcCd_Desc'
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

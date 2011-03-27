(function () {
	"use strict";

	var lineReader = require('line-reader'),
		utils = require('./utils');

	module.exports = function (file, format, each, callback) {
		lineReader.eachLine(file, function (line) {
			var entry = {},
				fields = line.split('^');

			format.forEach(function (item, idx) {
				entry[item] = utils.trim(fields[idx]);
			});

			each(entry);
		}).then(callback);
	};
}());

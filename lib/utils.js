(function () {
	"use strict";

	function trimTildes(field) {
		// just in case there's something stupid, like a carriage return
		field = field.trim();

		if (field && field.length) {
			if (field[0] == '~') {
				return field.substring(1, field.length - 1).trim();
			}
			return field.trim();
		}
		return undefined;
	}

	module.exports.trim = trimTildes;
}());

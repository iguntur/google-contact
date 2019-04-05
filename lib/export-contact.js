'use strict';
const fs = require('fs');
const path = require('path');
const json2csv = require('json2csv');
const pathEnsure = require('path-ensure');
const jsonFs = require('@guntur/json-fs');

module.exports = {
	toCSV({contacts = [], outputFilepath = 'google-contact'} = {}) {
		const fields = Object.keys(contacts[0]);
		const json2csvParser = new json2csv.Parser({fields});
		const content = json2csvParser.parse(contacts);
		const filepath = outputFilepath.replace(path.extname(outputFilepath), '');

		fs.writeFileSync(pathEnsure.sync(`${filepath}.csv`), content, {encoding: 'utf8'});
	},
	toJSON({contacts = [], outputFilepath = 'google-contact'} = {}) {
		const filepath = outputFilepath.replace(path.extname(outputFilepath), '');

		jsonFs.writeFile(`${filepath}.json`, contacts);
	}
};

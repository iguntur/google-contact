import fs from 'fs';
import path from 'path';
import os from 'os';
import test from 'ava';
import exportContact from '../lib/export-contact';

test('export contact to csv', t => {
	const fixtures = [{A: 1, B: 2, C: 3}];
	const outputFilepath = path.resolve(os.tmpdir(), 'google-contact/fixture', `${Date.now()}.csv`);

	exportContact.toCSV({
		contacts: fixtures,
		outputFilepath
	});

	const isExists = fs.existsSync(outputFilepath);
	t.true(isExists);
});

test('export contact to json', t => {
	const fixtures = [{A: 1, B: 2, C: 3}];
	const outputFilepath = path.resolve(os.tmpdir(), 'google-contact/fixture', `${Date.now()}.json`);

	exportContact.toJSON({
		contacts: fixtures,
		outputFilepath
	});

	const isExists = fs.existsSync(outputFilepath);
	t.true(isExists);
});

'use strict';
const _startCase = require('lodash.startcase');
const {defaultProperty} = require('./state');

function transformData(sourceObject = {}) {
	const resultObject = {};
	const keys = Object.keys(sourceObject);

	keys.forEach(key => {
		const value = sourceObject[key];
		const key_ = key.toLowerCase() === 'email' ? 'E-mail' : _startCase(key);

		if (Array.isArray(value)) {
			value.forEach((objectValue, i) => {
				++i;
				Object.keys(objectValue).forEach(a => {
					const b = _startCase(a);
					const key__ = `${key_} ${i} - ${b}`;
					resultObject[key__] = objectValue[a];
				});
			});
		} else {
			resultObject[key_] = value;
		}
	});

	return resultObject;
}

function createContact(property = defaultProperty) {
	const dataSource = Object.assign({}, defaultProperty, property);
	const data = transformData(dataSource);

	return data;
}

module.exports = createContact;

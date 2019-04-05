'use strict';
const createContact = require('./lib/create-contact');
const exportContact = require('./lib/export-contact');

module.exports = {
	create: createContact,
	export: exportContact
};

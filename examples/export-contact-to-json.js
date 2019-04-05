'use strict';
const faker = require('faker');
const phoneNumberGenerator = require('@guntur/phone-number-generator');
const googleContact = require('..');

const phoneNumbers = phoneNumberGenerator({
	provider: '0852',
	hlr: '5555',
	start: '0000',
	end: '0500'
});

const allContacts = [];

phoneNumbers.forEach(number => {
	const persoName = faker.name.firstName() + ' ' + faker.name.lastName();
	const person = googleContact.create({
		name: persoName,
		givenName: persoName,
		phone: [
			{
				type: 'Mobile',
				value: number
			}
		]
	});

	allContacts.push(person);
});

googleContact.export.toJSON({
	contacts: allContacts,
	outputFilepath: '.cache/google-contact.json'
});

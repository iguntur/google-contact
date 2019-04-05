'use strict';
const faker = require('faker');
const phoneNumberGenerator = require('@guntur/phone-number-generator');
const googleContact = require('..');

const phoneNumbers = phoneNumberGenerator({
	provider: '+62812',
	hlr: '1234',
	start: '0001',
	end: '0005'
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

googleContact.export.toCSV({
	contacts: allContacts,
	outputFilepath: '.cache/google-contact.csv'
});

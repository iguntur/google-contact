'use strict';
const googleContact = require('..');

const person = googleContact.create({
	name: '',
	givenName: '',
	nickname: '',
	phone: [
		{
			type: 'Mobile',
			value: '+0000123456789'
		}
	]
});

console.log(person);

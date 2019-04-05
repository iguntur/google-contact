# google-contact

[![Build Status](https://travis-ci.com/iguntur/google-contact.svg?token=Gqg6SWkLJ3YyFSAu5i3M&branch=master)](https://travis-ci.com/iguntur/google-contact)
[![npm](https://img.shields.io/npm/v/@guntur/google-contact.svg?style=flat)](https://www.npmjs.org/package/@guntur/google-contact)
[![node](https://img.shields.io/node/v/@guntur/google-contact.svg?style=flat)](https://nodejs.org)

> Create and export google contact to CSV or JSON


---


## Install

```console
$ npm install @guntur/google-contact
```

## Usage

```js
const googleContact = require('@guntur/google-contact');

const person = googleContact.create({
    name: 'John Doe',
    givenName: 'John Doe'
    phone: [
        {
            type: 'Mobile',
            value: '+0000123456789'
        }
    ]
});

console.log(person);
/*
{
    'Name': 'John Doe',
    'Given Name': 'John Doe',
    ...
    'Phone 1 - Type': 'Mobile',
    'Phone 1 - Value': '+0000123456789',
    ...
}
*/
```

## API

### googleContact

#### .create(`options: object`)

- Params:
  - `options`: `<object>` - _(required)_. See [state file](/lib/state.js) for all options.
- Returns: `<object>`


#### .export.toCSV(`options: object`)
#### .export.toJSON(`options: object`)

- Params:
  - `options`: `<object>` - _(required)_
    - `contacts`: `<object[]>`
    - `outputFilepath`: `<string>`
- Returns: `void`


## License

MIT © [Guntur Poetra](https://github.com/iguntur)

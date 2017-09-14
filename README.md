# openiban.js

[![Build Status](https://travis-ci.org/fourcube/openiban.js.svg)](https://travis-ci.org/fourcube/openiban.js) [![npm version](https://img.shields.io/npm/v/openiban.svg)](https://www.npmjs.com/package/openiban)

[openiban.com](https://openiban.com) API client for node and the browser. TypeScript typings are included in the repository.

# Getting it

You can install openiban.js through npm or yarn.

`npm i -S openiban`

or

`yarn add openiban`

Or you can include it on your page through a CDN (e.g. unpkg):

```html
<script type="text/javascript" src="//unpkg.com/openiban@1.0.1/dist/openiban.browser.js"></script>
```

# Using it

openiban.js provides a Promise API to the openiban.com IBAN validation webservice.

## Node.js
```js
const Openiban = require('openiban');

openiban
  .validate('DE89370400440532013000')
  .then((result) => {
    // result.valid should be true
  })
  .catch((err) => {
    // some http error has occurred
  });
```

## Typescript

openiban.js also publishes Typescript declarations.

```typescript
import * as Openiban from 'openiban';

Openiban.validate('DE89370400440532013000')
  .then((r: ValidationResult) => {
    console.log(r);
    // {
    //   "valid": true,
    //   "messages": [
    //     "Bank code valid: 37040044"
    //   ],
    //   "iban": "DE89370400440532013000",
    //   "bankData": {
    //     "bankCode": "37040044",
    //     "name": "Commerzbank",
    //     "zip": "50447",
    //     "city": "Köln",
    //     "bic": "COBADEFFXXX"
    //   },
    //   "checkResults": {
    //     "bankCode": true
    //   }
    // }
  })
  .catch((e) => {
    // some http error has occurred
    console.error(e);
  })
```

## Browser

When `openiban.js` is loaded inside your browser, it will be available through the global variable `Openiban`.

```html

<html>
  <head>
    <script type="text/javascript" src="//unpkg.com/openiban.js@0.1.0/dist/openiban.browser.js"></script>
  </head>
  
  <body>
    <!-- ... -->

    <script type="text/javascript">
      Openiban
        .validate('DE89370400440532013000')
        .then((result) => {
          // result.valid should be true
        })
        .catch((err) => {
          // some http error has occurred
        });
    </script>
  </body>
</html>
```



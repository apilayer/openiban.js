# openiban.js

openiban.com API client for node and the browser. TypeScript typings are included in the repository.

# Getting it

`npm i -S openiban.js`

or

`yarn add openiban.js`

# Using it

openiban.js provides a Promise API to the openiban.com IBAN validation webservice.

```
const openiban = require('openiban');

openiban
  .validate('DE89370400440532013000')
  .then((result) => {
    // result.valid should be true
  })
  .catch((err) => {
    // some http error has occurred
  });
```



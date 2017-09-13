# openiban.js

openiban.com API client for node and the browser. TypeScript typings are included in the repository.

# Getting it

You can install openiban.js through npm or yarn.

`npm i -S openiban.js`

or

`yarn add openiban.js`

Or you can include it on your page through a CDN (e.g. unpkg):

```html
<script type="text/javascript" src="//unpkg.com/openiban.js@0.1.0/dist/openiban.browser.js"></script>
```

# Using it

openiban.js provides a Promise API to the openiban.com IBAN validation webservice.

## Node.js
```
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



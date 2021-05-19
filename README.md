# base32-url-js

Very simple extension to hi-base32 to encode/decode using URL-safe characters. Same idea of Base64URL, thus Base32URL. 

## Installation

Use this command to install:

    npm install base32url

## Usage
You could use like this:

If you use node.js, you should require the module first:
```js
const Base32URL = require('base32url');
```

or import it
```js
import * as Base32URL from 'base32url';
```

And then just call the functions when needed: 

```js
Base32URL.encode('String to encode');
Base32URL.decode([]]);
```

### Methods

#### Base32URL.encode(input)

Encode string or bytes to base32url, set asciiOnly to true for better performace if it is.

##### *input: `String`, `Array`, `Uint8Array` or `ArrayBuffer`*

Input string or bytes to encode.

#### Base32URL.decode(base32Str)

Decode Base32URL string and return a *`byte array`*

##### *base32Str: `String`*

Base32URL string to decode.

#### Base32URL.decodeAsString(base32Str)

Decode Base32URL string and return a *`string`*

##### *base32Str: `String`*

Base32URL string to decode.



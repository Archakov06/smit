# Smit

Is a tiny library 🔥~270 (gziped) byte localStorage emitter. Smit has no dependencies, supports all browsers and IE9+.

## Install

```
npm install smit
```

or

```
yarn add smit
```

If you are in a CommonJS environment (eg Node), then you will need to add .default to your import:

```js
// ES6
import smit from 'smit';

// CommonJS
var smit = require('smit').default;

// UMD
<script src="https://unpkg.com/smit/dist/smit.umd.js"></script>

// Just one function (IIFE)
<script src="https://unpkg.com/smit/dist/smit.iife.js"></script>
```

## Usage

```js
import smit from 'smit';

const storage = smit();

// Callback called when a key "title" is updated in localStorage
storage.on('title', title => console.log('title updated', title));

// Listen of many keys in localStorage
storage.on('foo', value => console.log('foo', value)).on('bar', value => console.log('bar', value));

// Remove listener
storage.off('foo');

// Remove all listeners
storage.off();

// destroy the smit
storage.destroy();
```

## Examples

If you want to check how this smit works, open any of the following demos in two tabs.

**VanillaJS:** [Source](https://codesandbox.io/s/thirsty-gagarin-2dnp9) | [Demo](https://2dnp9.csb.app/)
<br>
**VueJS:** [Source](https://codesandbox.io/s/vue-template-f17f6) | [Demo](https://f17f6.csb.app/)
<br>
**ReactJS:** [Source](https://codesandbox.io/s/happy-mclean-umjel) | [Demo](https://umjel.csb.app/)

## Motivation

...

## How it works?

...

## License

[MIT License](https://opensource.org/licenses/MIT) © [Archakov Dennis](https://archakov.im/about)

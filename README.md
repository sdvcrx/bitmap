# Bitmap

A simple bitmap (data structure) implementation in JavaScript.

[![Build Status](https://travis-ci.org/sdvcrx/bitmap.svg?branch=master)](https://travis-ci.org/sdvcrx/bitmap) [![Coverage Status](https://coveralls.io/repos/github/sdvcrx/bitmap/badge.svg?branch=master)](https://coveralls.io/github/sdvcrx/bitmap?branch=master)

## Install

```bash
npm install bitmap-ds

# or
yarn add bitmap-ds
```

## Example

```javascript
const Bitmap = require('bitmap-ds')

const bitmap = new Bitmap(10)
bitmap
  .add(2)
  .add(5)

console.log(bitmap.contains(2))  // => true

bitmap.clear(2)
console.log(bitmap.contains(2))  // => false
```

## License

MIT

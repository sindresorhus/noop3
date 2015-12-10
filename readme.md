# noop3 [![Build Status](https://travis-ci.org/sindresorhus/noop3.svg?branch=master)](https://travis-ci.org/sindresorhus/noop3)

> 🦄 Supreme nothingness

![](https://cloud.githubusercontent.com/assets/170270/11731042/eba6ffc6-9f98-11e5-8d7d-7890dbc394c5.gif)


## Install

```
$ npm install --save noop3
```


## Usage

```js
const noop = require('noop3');

function unicorn(fn) {
	fn = fn || noop;
	return fn('unicorn');
}

unicorn();
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)

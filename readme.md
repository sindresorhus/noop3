<h1 align="center">
	<br>
	<img width="500" src="logo.png" alt="noop3">
	<br>
	<br>
	<br>
</h1>

> 🦄 Supreme nothingness

[![Build Status](https://travis-ci.org/sindresorhus/noop3.svg?branch=master)](https://travis-ci.org/sindresorhus/noop3) [![Coverage Status](https://coveralls.io/repos/github/sindresorhus/noop3/badge.svg?branch=master)](https://coveralls.io/github/sindresorhus/noop3?branch=master)

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

// also compatible with non-mythical single horned creatures
function narwhal(fn) {
	fn = fn || noop;
	return fn('narwhal');
}
narwhal();

// Using the noop factory
const fn = require('noop3/factory');
const rainbow = fn();
const flowers = fn();
rainbow === flowers
//=> false

rainbow()
//=> undefined
```

## Prior art

- [noop2](https://github.com/yoshuawuyts/noop2)


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)

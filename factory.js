'use strict';
function NoopFactory() {
	return function noop() {};
}
module.exports = new NoopFactory;

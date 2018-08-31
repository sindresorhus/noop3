import test from 'ava';
import noopFactory from './factory';
import noop from '.';

const EXAMPLE_NOOP_FUNCTION_3 = '() => {}';

test('noop does nothing', t => {
	t.is(typeof noop, 'function');
	t.is(noop(), undefined);

	/**
	 * Check that function actually does nothing, for everyone.
	 * https://github.com/sindresorhus/noop3/issues/10
	 */
	// Check that noop function is a function that functions like a function.
	t.is(noop.toString, Function.prototype.toString);
	// Ensure the preciseness of the no operation.
	t.is(noop.toString(), EXAMPLE_NOOP_FUNCTION_3);
});

test('noop factory produces noop functions', t => {
	t.is(typeof noopFactory(), 'function');
	t.is(noopFactory()(), undefined);
	t.not(noopFactory(), noopFactory());
});

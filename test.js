import test from 'ava';
import fnfactory from './factory';
import fn from '.';

const EXAMPLE_NOOP_FUNCTION_3 = '() => {}';

test('noop does nothing', t => {
	t.is(typeof fn, 'function');
	t.is(fn(), undefined);

	/**
	 * Check that function actually does nothing, for everyone.
	 * https://github.com/sindresorhus/noop3/issues/10
	 */
	// Check that noop function is a function that functions like a function.
	t.is(fn.toString, Function.prototype.toString);
	// Ensure the preciseness of the no operation.
	t.is(fn.toString(), EXAMPLE_NOOP_FUNCTION_3);
});

test('noop factory produces noop functions', t => {
	t.is(typeof fnfactory(), 'function');
	t.is(fnfactory()(), undefined);
	t.not(fnfactory(), fnfactory());
});

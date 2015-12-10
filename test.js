import test from 'ava';
import fn from './';

test(t => {
	t.is(typeof fn, 'function');
	t.is(fn(), undefined);
});

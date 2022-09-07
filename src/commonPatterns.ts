import { Any } from './constants';
import { concat, repeat, star } from './constructors';
import type { RegEx } from './regex';

function length(min: number, max?: number) {
	return repeat(Any, min, max);
}

function atLeast(count: number, re: RegEx, rest: RegEx = Any) {
	return repeat(concat(star(rest), re, star(rest)), count);
}

export { length, atLeast };

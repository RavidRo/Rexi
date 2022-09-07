import type { Concat, Intersect, Optional, Plus, RegEx, Repeat, Star, Union } from './regex';

// list constructors
function union(...re: RegEx[]): Union {
	return { type: 'union', re };
}
function concat(...re: RegEx[]): Concat {
	return { type: 'concat', re };
}
function intersect(...re: RegEx[]): Intersect {
	return { type: 'intersection', re };
}

// single constructors
function star(re: RegEx): Star {
	return { type: 'star', re };
}
function plus(re: RegEx): Plus {
	return { type: 'plus', re };
}
function optional(re: RegEx): Optional {
	return { type: 'optional', re };
}
function repeat(re: RegEx, min: number, max?: number): Repeat {
	return { type: 'repeat', re, min, max };
}

export { union, concat, intersect, star, plus, optional, repeat };

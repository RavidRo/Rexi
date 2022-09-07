import type { RegEx } from './regex';

export function toPattern(re: RegEx): string {
	if (typeof re === 'string') {
		return re;
	}
	switch (re.type) {
		case 'concat':
			return re.re.map(toPattern).join('');
		case 'union':
			return re.re.map(toPattern).join('|');
		case 'intersection':
			return re.re.map(toPattern).join('&');
		case 'star':
			return toPattern(re.re) + '*';
		case 'plus':
			return toPattern(re.re) + '+';
		case 'optional':
			return toPattern(re.re) + '?';
		case 'repeat':
			return toPattern(re.re) + `{${re.min},${re.max}}`;
	}
}

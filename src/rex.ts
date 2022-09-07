// Version 2
type RexValue = Rex | string;
function source(re: RexValue): string {
	return typeof re === 'string' ? re : re.pattern;
}

function concat(...re: RexValue[]): Rex {
	return new Rex('').concat(...re);
}

function startWith(re: RexValue): Rex {
	return new Rex(re).start();
}
function endWith(re: RexValue): Rex {
	return new Rex(re).end();
}
function exact(re: RexValue): Rex {
	return new Rex(re).start().end();
}

export class Rex {
	public readonly pattern: string;

	constructor(pattern: RexValue) {
		this.pattern = source(pattern);
	}

	concat(...re: RexValue[]): Rex {
		return new Rex(this.pattern + re.map((r) => source(r)).join(''));
	}

	public start(): Rex {
		return concat('^', this);
	}

	end(): Rex {
		return this.concat('$');
	}

	exact(): Rex {
		return this.start().end();
	}

	endOfWord(): Rex {
		return this.concat('\\b');
	}

	startOfWord(): Rex {
		return concat('\\b', this);
	}

	exactWord(): Rex {
		return this.startOfWord().endOfWord();
	}

	toRegExp(): RegExp {
		return new RegExp(this.pattern);
	}
}

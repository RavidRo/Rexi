import * as re from './src/index';

/*
Password with:
- least 8 characters
- at least one uppercase letter
- at least one lowercase letter
- at least one number  
- at least one special character
*/

re.intersect(
	re.repeat(re.Any, 8, Infinity),
	re.concat(re.star(re.Any), re.Upper, re.star(re.Any)),
	re.concat(re.star(re.Any), re.Lower, re.star(re.star(re.Any))),
	re.concat(re.star(re.Any), re.Number, re.star(re.star(re.Any))),
	re.concat(re.star(re.Any), re.Special, re.star(re.Any))
);

const s = re.intersect(
	re.length(8, Infinity),
	re.atLeast(1, re.Upper),
	re.atLeast(1, re.Lower),
	re.atLeast(1, re.Number),
	re.atLeast(1, re.Special, re.Any)
);

import { Rex } from '../src';

it('String found', () => {
	const regexPattern2 = new Rex('cat').endOfWord().toRegExp();
	expect(regexPattern2.test('The mouse and the cat')).toBeTruthy();
	expect(regexPattern2.exec('cat and mouse')).toBeTruthy();
	expect(regexPattern2.exec('Mouse and cat in house')).toBeTruthy();
	expect(regexPattern2.exec('cat')).toBeTruthy();
});

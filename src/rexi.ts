// re.union("1", "2").star()
// re.union("1", "2").plus()
// re.union("1", "2").optional()
// re.union("1", "2").repeat(3)
// re.union("1", "2").repeat(3, 5)
// re.union("1", "2").repeat(3, Infinity)
// re.Any.repeat(8, 10)
// re.length(8, 10)

// re.union("1", "2").concat("3", "4", "5")

/*
Password with:
- least 8 characters
- at least one uppercase letter
- at least one lowercase letter
- at least one number  
- at least one special character

re.intersect(
	re.Any.repeat(8, infinity),
	re.concat(re.Any.star(), re.Upper, re.Any.star()),
	re.concat(re.Any.star(), re.Lower, re.Any.star()),
	re.concat(re.Any.star(), re.Number, re.Any.star()),
	re.concat(re.Any.star(), re.Special, re.Any.star())
)

re.intersect(
	re.length(8, re.infinity),
	re.atLeast(1, re.Upper),
	re.atLeast(1, re.Lower),
	re.atLeast(1, re.Number),
	re.atLeast(1, re.Special, re.Any)
)
*/

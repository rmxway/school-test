export const declOfNum = (n: number, textVariants: string[]) => {
	n = Math.abs(n) % 100;
	const n1 = n % 10;
	if (n > 10 && n < 20) {
		return textVariants[2];
	}
	if (n1 > 1 && n1 < 5) {
		return textVariants[1];
	}
	if (n1 === 1) {
		return textVariants[0];
	}
	return textVariants[2];
};

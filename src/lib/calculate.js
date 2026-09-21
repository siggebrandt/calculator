import * as math from 'mathjs';
import { evaluate } from 'mathjs';

export function calculate(expression) {
	try {
		return Number(
			evaluate(expression.replaceAll('×', '*').replaceAll('÷', '/').replaceAll(',', '.'))
		);
	} catch {
		console.error('failed calculation;', expression);
		return 0;
	}
}

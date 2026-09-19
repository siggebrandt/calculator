import * as math from 'mathjs';
import { evaluate } from 'mathjs';

export function calculate(expression) {
	return Number(
		evaluate(expression.replaceAll('×', '*').replaceAll('÷', '/').replaceAll(',', '.'))
	);
}

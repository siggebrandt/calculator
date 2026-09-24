import * as math from 'mathjs';
import { evaluate } from 'mathjs';

export function calculate(expression) {
	try {
		const result = Number(
			evaluate(expression.replaceAll('×', '*').replaceAll('÷', '/').replaceAll(',', '.'))
		);
		if (!Number.isFinite(result)) {
			return 0;
		}
		return result;
	} catch (e) {
		console.error(`Failed calculation: ${expression}`, e);
		return 0;
	}
}

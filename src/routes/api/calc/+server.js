import { json } from '@sveltejs/kit';
import * as math from 'mathjs';
import { evaluate } from 'mathjs';
import { calculate } from '$lib/calculate.js';

export async function POST({ request }) {
	const requestBody = await request.json();
	if (!requestBody || requestBody == 0) {
		return json(0, { status: 200 });
	}

	/* management of mathematical expressions */
	const result = calculate(requestBody.inputtedExpression);
	/* const expression = requestBody.inputtedExpression
		.replaceAll('×', '*')
		.replaceAll('÷', '/')
		.replaceAll(',', '.');

	const result = Number(evaluate(expression)); */
	return json(result, { status: 200 });
}

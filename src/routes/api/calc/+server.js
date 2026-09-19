import { json } from '@sveltejs/kit';
import * as math from 'mathjs';
import { evaluate } from 'mathjs';

export async function POST({ request }) {
	const requestBody = await request.json();

	if (!requestBody.inputtedExpression) {
		return json({ error: 'Uttrycket saknas' }, { status: 400 });
	} // IF EMPTY

	/* management of mathematical expressions */
	const expression = requestBody.inputtedExpression
		.replaceAll('×', '*')
		.replaceAll('÷', '/')
		.replaceAll(',', '.');

	const result = Number(evaluate(expression));
	return json({ result }, { status: 200 });
}

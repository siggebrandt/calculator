import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { inputtedExpression } = await request.json();

	if (!inputtedExpression) {
		return json({ error: 'Uttrycket saknas' }, { status: 400 });
	}

	const expressionValue = calc(inputtedExpression);

	console.log(expressionValue);

	return json({ expressionValue }, { status: 400 });
}

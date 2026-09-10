import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { inputtedExpression } = await request.json();

	if (!inputtedExpression) {
		return json({ error: 'Uttrycket saknas' }, { status: 400 });
	}

	const expressionValue = Number(inputtedExpression);

	// hantera o omvandla för Number funkar EJ i sammanhanget, så hitta "'+', '-', '×', '÷'" o omvandla samt hantera alla matematiska funktioner

	console.log(request);

	console.log(expressionValue);

	return json({ expressionValue }, { status: 200 });
}

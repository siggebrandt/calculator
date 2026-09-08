<script>
	let inputtedExpression = ''; // binded
	$: {
		console.log(inputtedExpression); // Reaktiva statement --- /* Använd på preview senare */
		/* document.querySelector(expressionPreview).textContent  -- detta funkar ej*/
	}

	function addToExpression(input) {
		inputtedExpression += input;
	}
	async function calculate() {
		// skickar till APIn som hanterar requesten
		console.log('expression:', inputtedExpression);
		const response = await fetch(`/api/calc`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ inputtedExpression })
		});
	}

	// when any key pressed (except numbers), write in the input.
</script>

<div class="text-right mr-5">
	<h1>Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
</div>

<input
	bind:value={inputtedExpression}
	id="inputField"
	type="number"
	class="bg-green-100 border ml-5"
/>
<span id="expressionPreview" class="bg-lime-300 italic">preview</span>
<button class="bg-pink-500 text-white px-5 ms-5 ml-5" on:click={calculate}>calc</button>

<hr class="m-2" />

<div id="calculatorButtons" class="text-center">
	<!-- borde vara flex istället för center text-->
	{#each [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as buttonNumber}
		<button class="bg-pink-700 text-white px-5 ms-5" on:click={() => addToExpression(buttonNumber)}
			>{buttonNumber}</button
		>
	{/each}
	<br class="mb-4" />
	{#each ['+', '-', '×', '÷'] as handler}
		<button class="bg-pink-700 text-white px-5 ms-5" on:click={() => addToExpression(handler)}
			>{handler}</button
		>
	{/each}
</div>

<hr class="m-2" />

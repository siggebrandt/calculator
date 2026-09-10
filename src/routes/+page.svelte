<!-- TO DO
  -- when any key pressed (except numbers), write in the input.
  -- 
  -->

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
</script>

<div class="flex">
	<div id="calculatorResult" class="flex-1">
		<input bind:value={inputtedExpression} id="inputField" class="bg-green-100 border ml-5" />
		<span id="expressionPreview" class="bg-lime-300 italic">preview</span>
		<button class="bg-pink-500 text-white px-5 ms-5 ml-5" on:click={calculate}>calc</button>
	</div>
	<div id="calculatorButtons" class="flex-1">
		<div id="calculatorButtonsNumbers" class="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-2">
			{#each [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as buttonNumber}
				<button
					class="bg-orange-200 text-white aspect-square rounded-xl"
					on:click={() => addToExpression(buttonNumber)}>{buttonNumber}</button
				>
			{/each}
		</div>
	</div>
</div>
<div class="flex">
	<div id="calculatorButtonsOperators" class="flex-1">
		{#each ['+', '-', '×', '÷'] as handler}
			<button
				class="bg-orange-500 text-white px-5 ms-5 aspect-[5/3]"
				on:click={() => addToExpression(handler)}>{handler}</button
			>
		{/each}
	</div>
</div>

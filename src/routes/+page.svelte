<script>
	function calculate() {}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<!-- <div class="bg-amber-300"></div> -->
<!-- <div class="bg-red-700"><a href="/about"> hello</a></div> -->

<input id="inoutField" class="bg-green-100 border" />
<hr />

<button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>9</button
>
<button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>8</button
>
<button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>7</button
><button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>6</button
><button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>5</button
><button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>4</button
><button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>3</button
>
<button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>2</button
><button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>1</button
><button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>0</button
>
<button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>+</button
><button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>-</button
><button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>×</button
><button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>÷</button
>
<hr />
<!-- här skickar vi till APIn för att calkulera-->
<button
	class="bg-pink-700 text-white px-5 ms-5"
	on:click={(document.querySelector('input').value += this.textContent)}>=</button
>

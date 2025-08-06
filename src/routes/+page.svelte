<script>
	function calculate() {}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<div class="bg-amber-300"></div>
<div class="bg-red-700"><a href="/about"> hello</a></div>

<input id="inoutField" />
<br />
<button on:click={(document.querySelector('input').value += ' dang')}>=</button>

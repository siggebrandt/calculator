<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="bg-blue-200 text-center">this is the header</div>

<div class="bg-pink-100">{@render children()}</div>

<div class="bg-green-200 text-center">this is the footer</div>

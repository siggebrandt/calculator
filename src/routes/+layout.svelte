<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="bg-blue-200 text-center h-0.5/10">this is the header</div>

<div class="bg-gray-100 h-full">{@render children()}</div>

<div class="bg-green-200 text-center h-0.5/10">
	this is the footer, check out <a href="/about">ABOUT</a>
</div>

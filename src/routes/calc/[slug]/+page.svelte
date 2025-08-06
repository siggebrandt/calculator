<!-- <script>
	export let params;
	const expression = decodeURIComponent(params.slug);

	console.log(expression);
</script> -->

<script>
	export let data; // data från load()
	console.log('Data in Svelte file:', data);
</script>

<h1>Slug: {data.slug}</h1>

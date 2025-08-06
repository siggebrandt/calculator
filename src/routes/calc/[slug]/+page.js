export function load({ params }) {
	// load används som ramverksnamn för att skicka till "data" i motsvarande .svelte komponent
	return {
		slug: params.slug // ett objekt
	};
}

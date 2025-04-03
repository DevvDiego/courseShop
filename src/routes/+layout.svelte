<script>
	import '../app.css';
	
	let routes = [
	
		{"text":"Home", "url":"/"},
		{"text":"Cursos", "url":"/courses"},
	
	]

    let selectedRoute = $state("/"); // Inicialmente seleccionamos la ruta "/"
    function selectRoute(url) {
        selectedRoute = url;
    }

	let { children } = $props();
</script>



<nav class="w-full">
	<ul class="w-full h-full flex items-center">
	
		{#each routes as route}

			<li class="p-3 {selectedRoute === route.url ? 'selected' : ''}" >
				<a href={route.url} onclick={() => selectRoute(route.url)}>
					{route.text}
				</a>
			</li>

		{/each}

	</ul>
</nav>

{@render children()}


<style>
	.selected{
		background-color: #35353d;
	}
</style>
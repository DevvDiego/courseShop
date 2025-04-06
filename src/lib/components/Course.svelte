<script>


    let {href, title, summary, startHour, src, alt, skeleton=null} = $props();
</script>

{#if skeleton}

    <div class="w-full sm:w-56">
        <div class="skeleton h-[200px] mb-2 rounded-2xl"></div>

        <div>
            <div class="skeleton p-4 mb-2 rounded-xl"></div>

            <div class="skeleton p-4 rounded-xl"></div>
        </div>
    </div>

{:else}
<a {href} class="block bg-zinc-950 max-w-[250px] w-5/6 rounded-xl">

           
        <img class="w-full h-52 m-auto rounded-t-xl object-center object-fill" {src} {alt}>

        <div class="w-full p-4">
            <h1 class="my-1 font-bold">
                {title}
            </h1>
 
            <p class="text-xs truncate">
                {summary}
            </p>

            <p class="mt-1 text-xs">
                Horario: {startHour}
            </p>
        </div>

</a>
{/if}

<style>
    
    /* Estilo base para el contenedor */
    .skeleton {
        background: linear-gradient(90deg, #151515 25%, #303030 50%, #151515 75%);
        background-size: 200% 100%;
        animation: skeleton-animation 1.2s infinite;
    }

    /* Animación para el efecto de "esqueleto" */
    @keyframes skeleton-animation {
      0% {
        background-position: 100% 0;
      }
      100% {
        background-position: -100% 0;
      }
    }
</style>
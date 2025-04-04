<script>


    let {title, summary, startHour, src, alt, skeleton=null} = $props();
</script>

{#if skeleton}

    <div class="w-48">
        <div class="skeleton h-[200px] mb-2 rounded-2xl"></div>

        <div>
            <div class="skeleton p-4 mb-2 rounded-xl"></div>

            <div class="skeleton p-4 rounded-xl"></div>
        </div>
    </div>

{:else}
    <div class="w-48">
        
        <div class="w-full mb-4">
            <img class="w-full h-full" {src} {alt}>
        </div>

        <div>
            <h1 class="w-full my-4">{title}</h1>

            <p>
                {summary}
            </p>

            <p class="text-xs mt-3">
                Horario: {startHour}
            </p>

            <button class="bg-blue-900 mt-5 px-3 py-1 rounded-xl">
                Registrarse
            </button>
        </div>
    </div>
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
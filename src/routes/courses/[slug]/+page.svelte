<script>
    
    
    let { data } = $props();
</script>

<main>
    <section>
        <h1 class="text-3xl font-bold">
            Curso de {data.course.name}
        </h1>
    
        <p>
            {data.course.information}
        </p>
    </section>

    <section class="flex flex-row flex-nowrap overflow-x-scroll gap-5 mx-5">
        {#each data.course.images as image }
            <img src={image} alt="contenido del curso">
        {/each}
    </section>

</main>
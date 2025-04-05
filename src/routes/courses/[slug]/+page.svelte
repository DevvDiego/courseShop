<script>
    import Carrousel from '$lib/components/Carrousel.svelte';

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

    <section class="m-5">
        <Carrousel images={data.course.images}/>
    </section>

</main>
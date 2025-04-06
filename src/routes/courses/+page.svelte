<script>
    import Course from "$lib/components/Course.svelte";

    let { data } = $props();
</script>


<h1 class="m-5 text-xl">
    ¿Que quieres aprender hoy?
</h1>


<div class="
        w-screen mb-20 sm:mx-10
        flex flex-row flex-wrap justify-center sm:justify-start
        gap-5
    ">

    {#if data}

        {#each data.courses as {url, name, summary, startHour} }

            <Course href={"/courses/"+url} title={name} summary={summary} startHour={startHour} src={"https://picsum.photos/200/200"} />

        {/each}

    {:else}

        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />

    {/if}

</div>
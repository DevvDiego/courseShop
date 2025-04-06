<script>
    import Course from "$lib/components/Course.svelte";

    let { data } = $props();
</script>


<h1 class="m-5 text-xl">
    ¿Que quieres aprender hoy?
</h1>


<div class="
        w-screen mb-20 px-5
        flex flex-row flex-wrap justify-center sm:justify-start
        gap-5
    ">

    {#if data}

        {#each data.courses as {url, coverPhoto, name, summary, startHour} }

            <Course href={"/courses/"+url} title={name} summary={summary} startHour={startHour} src={coverPhoto} />

        {/each}

    {:else}

        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />

    {/if}

</div>
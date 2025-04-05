<script>
    import Course from "$lib/components/Course.svelte";

    let { data } = $props();
</script>


<h1 class="m-5 text-xl">
    ¿Que quieres aprender hoy?
</h1>


<div class="
        m-5 
        flex flex-row flex-wrap justify-evenly sm:justify-start 
        gap-4 gap-y-6
    ">

    {#if data}

        {#each data.courses as {url, name, summary, startHour} }

            <a href={"/courses/"+url}>
                <Course title={name} summary={summary} startHour={startHour} src={"https://picsum.photos/200/200"} />
            </a>

        {/each}

    {:else}

        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />

    {/if}

</div>
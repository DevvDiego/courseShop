<script>
    import Course from "$lib/components/Course.svelte";
    import { onMount } from "svelte";

    let courses = $state( null );
    
    onMount(()=>{

        fetch("/courses.json")
        .then(res=>{
            return res.json();
        })
        .then(json=>{
            // console.log(json);
            courses = json;
        })

    })

</script>


<h1 class="text-3xl">
    asd
</h1>

<div class="flex flex-wrap items-center gap-12">

    {#if courses}

        {#each courses as course}

            <Course title={course.name} summary={course.summary} startHour={course.startHour} src={"https://picsum.photos/200/200"} />

        {/each}

    {:else}

        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />
        <Course skeleton={true} />

    {/if}

</div>
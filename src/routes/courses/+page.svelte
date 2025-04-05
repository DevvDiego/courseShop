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


<h1 class="m-5 text-xl">
    ¿Que quieres aprender hoy?
</h1>


<div class="
        m-5 
        flex flex-row flex-wrap justify-evenly sm:justify-start 
        gap-4 gap-y-6
    ">

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
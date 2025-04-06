<script>
    import Carrousel from '$lib/components/Carrousel.svelte';
    import { page } from "$app/stores"

    let slug = $page.params.slug;

    let { data } = $props();
</script>

<main class="
    w-full p-5 
    
    ">
    
    <div class="flex flex-col-reverse sm:flex-row flex-wrap justify-center">
        <div class="sm:pr-5 sm:w-1/2">
        
            <h1 class="text-3xl font-bold mb-2">
                Curso de {data.course.name}
            </h1>
        
            <p>
                {data.course.information}
                <br><br>
                Este curso se impartira a las {data.course.startHour}
            </p>
            <br><br><br>
            
            <div>
                <h2 class="text-lg font-semibold">¿Que aprenderas en este curso?</h2>
                <ul class="list-disc pl-5">
                    {#each data.course.what_will_you_learn as skill}
                        <li>{skill}</li>
                    {/each}
                </ul>
            </div>

            <a href={slug + "/enroll"}>
                <button  type="button" class="w-3/5 block m-auto my-20 p-2 px-3 rounded-sm bg-indigo-800">
                    Inscribirme
                </button>    
            </a>
            

        </div>
    
        <div class="mb-10 sm:mb-0 sm:w-1/2 max-w-96">
            <Carrousel class="rounded-2xl " images={data.course.images}/>
        </div>
    </div>

</main>
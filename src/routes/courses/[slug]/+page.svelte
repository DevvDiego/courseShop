<script>
    import Carrousel from '$lib/components/Carrousel.svelte';
    import Input from '$lib/components/Input.svelte';

    let { data } = $props();
</script>

<main class="
    w-full p-5 
    
    ">
    
    <div class="flex flex-col-reverse sm:flex-row flex-wrap justify-center">
        <div class=" sm:w-1/2">
        
            <h1 class="text-3xl font-bold mb-2">
                Curso de {data.course.name}
            </h1>
        
            <p>
                {data.course.information}
                <br><br>
                Este curso se impartira a las {data.course.startHour}
            </p>
            
        </div>
    
        <div class="mb-10 sm:mb-0 sm:w-1/2 max-w-96">
            <Carrousel class="rounded-2xl" images={data.course.images}/>
        </div>
    </div>

    <form class="max-w-md mx-auto my-24 bg-zinc-950 rounded-lg" action="#">
        <h1 class="py-2 text-center text-lg font-medium w-full">Inscribete ahora</h1>

        <div class="p-2 px-5 flex flex-col">
            
            <Input class="mb-3" type="text" text="Correo" name="email" placeholder="email@example.com" />
            <Input class="mb-10" type="text" text="Nombre" name="name" placeholder="introduce tu nombre" />
            <button type="submit" class="w-full mt-8 mb-5 p-2 px-3 rounded-sm bg-indigo-900">Inscribirme</button>

        </div>


    </form>



</main>
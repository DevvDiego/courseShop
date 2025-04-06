<script>
    import Input from '$lib/components/Input.svelte';
</script>

<form class="max-w-md mx-auto my-24 bg-zinc-950 rounded-lg" action="#">
    <h1 class="py-2 text-center text-lg font-medium w-full">Inscribete ahora</h1>

    <div class="p-2 px-5 flex flex-col">
        
        <Input class="mb-3" type="text" text="Correo" name="email" placeholder="email@example.com" />
        <Input class="mb-10" type="text" text="Nombre" name="name" placeholder="introduce tu nombre" />
        <button type="submit" class="w-full mt-8 mb-5 p-2 px-3 rounded-sm bg-indigo-900">Inscribirme</button>

    </div>


</form>
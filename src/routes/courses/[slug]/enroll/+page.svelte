<script>
    import Input from '$lib/components/Input.svelte';

    let sendNotification = $state(false);
    let notificationText = $state("");

    function notificationTimeout(){
        setTimeout(()=>{
            sendNotification = false;
        }, 15 * 1000) //mantener por 15 segundos
    }

    function getData(event){
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);

        console.log(data.get("email"));
        console.log(data.get("name"));
        
        // Falta rectificar estado del formulario para mandar notificacion de error
        notificationText = "Enviado correctamente" 
        sendNotification = true;
    }

</script>

<form onsubmit={getData} class="max-w-md mx-auto my-24 bg-zinc-950 rounded-lg" action="#">
    {#if sendNotification}
        <div class="w-full bg-green-800 py-2 text-center text-xl font-bold">
            {notificationText}
        </div>
    {/if}
    
    <h1 class="py-2 text-center text-lg font-medium w-full">Inscribete ahora</h1>

    <div class="p-2 px-5 flex flex-col">
        
        <Input class="mb-3" type="text" text="Correo" name="email" placeholder="email@example.com" />
        <Input class="mb-10" type="text" text="Nombre" name="name" placeholder="introduce tu nombre" />
        <button type="submit" class="w-full mt-8 mb-5 p-2 px-3 rounded-sm bg-indigo-900">Inscribirme</button>

    </div>


</form>
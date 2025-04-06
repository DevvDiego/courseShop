<script>

    let { type, name, placeholder, text, class: Classname} = $props();
</script>

<div class={Classname}>
    <label for={name} class="block mb-2 text-base font-bold">
        {text}
    </label>
    <input {type} {placeholder} {name} class="
        w-full p-3 px-4 text-sm
        rounded-md border-[1px] border-zinc-700
    ">
</div>
<script>
    let currentImage = $state(0);

    function nextImage(){
        if( (currentImage + 1) > images.length - 1){
            currentImage = 0;
            return;
        }

        currentImage++;

    }

    function lastImage(){
        if(0 > currentImage-1){
            currentImage = images.length - 1; //minus one because it needs to be array like indexing
            return;
        }

        currentImage--;

    }

    let { images, class: className, imageClass } = $props();
</script>


<div class="m-auto relative w-fit h-fit {className}">
    <button onclick={lastImage} class="rounded-r-2xl bg-zinc-600 opacity-80 p-3 text-white z-10 absolute top-1/2 left-0 cursor-pointer">
        last
    </button>
    
    <img class={imageClass} src={images[currentImage]} alt="carrousel">
    
    <button onclick={nextImage} class="rounded-l-2xl bg-zinc-600 opacity-80 p-3 text-white z-10 absolute top-1/2 right-0 cursor-pointer">
        next
    </button>
</div>
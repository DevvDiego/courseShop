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

    let { images } = $props();
</script>


<div class="">
    <button onclick={lastImage}>
        last
    </button>
    
    <img src={images[currentImage]} alt="carrousel">
    
    <button onclick={nextImage}>
        next
    </button>
</div>
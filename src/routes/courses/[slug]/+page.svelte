<script>
    
    // let images = data.course.images;
    let images = ["https://picsum.photos/300/300?random=1","https://picsum.photos/300/300?random=2","https://picsum.photos/300/300?random=3"];
    
    let currentImage = $state(0);

    function nextImage(){
        console.log("cahnge")
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

    let { data } = $props();
</script>

<main>
    <section>
        <h1 class="text-3xl font-bold">
            Curso de {data.course.name}
        </h1>
    
        <p>
            {data.course.information}
        </p>
    </section>

    <section class="m-5">
        <button onclick={lastImage}>
            last
        </button>
        
        <img src={images[currentImage]} alt="carrousel">
        
        <button onclick={nextImage}>
            next
        </button>
    </section>

</main>
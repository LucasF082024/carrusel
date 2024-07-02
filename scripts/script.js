document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.carousel .item');


    function* myGen(){
        while(true){
        yield "Hay imagen 1";
        yield "Hay imagen 2";
        yield "Hay imagen 3";
        yield "Hay imagen 4";
        }
    }
    
    const gen = myGen();

    function nextImage(){
        objetoGen = gen.next()
        if (!objetoGen.done) {
            console.log("Hay imagen", objetoGen.value);
        } else {
            console.log("no hay imagen");   
        }
        
    }


    
    const carruselR = document.querySelector('.right.carousel-control')
    carruselR.addEventListener('click', nextImage) 
    
    

})

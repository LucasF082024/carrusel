document.addEventListener('DOMContentLoaded', () => {
    function* myGen(){
        while(true){
        yield "Hay imagen 1";
        yield "Hay imagen 2";
        yield "Hay imagen 3";
        yield "Hay imagen 4";
        }
    }
    
    const gen = myGen();

    function reset(){
        let objetoGen = gen.next()
    }

    function nextImage(){
        objetoGen = gen.next()
        if (!objetoGen.done) {
            console.log("Hay imagen", objetoGen.value);
        } else {
            console.log("no hay imagen");   
        }
        
    }
    
    const carrusel = document.querySelector('.right.carousel-control')
    carrusel.addEventListener('click', nextImage) 
    
    

})

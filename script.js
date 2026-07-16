const items = document.querySelectorAll(".item");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let contador = 0;

function mostrarSlide(){

    items.forEach(item=>{
        item.classList.remove("active");
    });

    items[contador].classList.add("active");

}

next.addEventListener("click", ()=>{

    contador++;

    if(contador >= items.length){
        contador = 0;
    }

    mostrarSlide();

});

prev.addEventListener("click", ()=>{

    contador--;

    if(contador < 0){
        contador = items.length - 1;
    }

    mostrarSlide();

});
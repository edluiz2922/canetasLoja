const imgs = document.getElementById("img");
const img = document.querySelector("#fig img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length-1){
        idx = 0;

    }

    imgs.style.transform = 'translateX( ${-idx *480}px)'
}

setInterval(carrossel, 1800);
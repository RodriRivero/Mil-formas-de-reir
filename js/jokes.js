




const playCancion = document.getElementsByClassName('play')
const stopCancion = document.getElementsByClassName('stop')

let audio

for(elemento of playCancion){
    elemento.addEventListener('click', function(){
        let cancion = this.getAttribute('id')
        audio = new Audio (`./audio/${cancion}.mp3`)
        audio.play()
    })
}

for(elemento of stopCancion){
    elemento.addEventListener('click', function(){
        audio.pause()
    })
}





let irac = document.getElementById("gotoopen")
    irac.addEventListener("click",abrir)
function abrir(){
    document.getElementById('alertblack').style.display='block';
}


let clo = document.getElementById("close")
    clo.addEventListener("click",cerrar)
function cerrar(){
    document.getElementById('alertblack').style.display='none';
}


let acep = document.getElementById("acepte")
    acep.addEventListener("click",continuar)
function continuar(){
    window.location="blackjokes.html";
}



let irw = document.getElementById("gow")

    irw.addEventListener("click",whitejokes)
function whitejokes(){
    window.location="whitejokes.html";
}



let irg = document.getElementById("gog")

    irg.addEventListener("click",greenjokes)
function greenjokes(){
    window.location="greenjokes.html";
}



let irr = document.getElementById("gor")

    irr.addEventListener("click",reflexi)
function reflexi(){
    window.location="reflexi.html";
}



let irm = document.getElementById("gom")

    irm.addEventListener("click",moti)
function moti(){
    window.location="moti.html";
}





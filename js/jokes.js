




const playCancion = document.getElementsByClassName('play')
const stopCancion = document.getElementsByClassName('stop')


let audio

for(elemento of playCancion){
    elemento.addEventListener('click', function(){
        let cancion = this.getAttribute('id')
        audio = new Audio(`./audio/${cancion}.mp3`)
        audio.play()
    })
}

for(elemento of stopCancion){
    elemento.addEventListener('click', function(){
        audio.pause()
    })
}


function abrir(){

    document.getElementById('alertblack').style.display='block';
}
function cerrar(){

    document.getElementById('alertblack').style.display='none';
}

function continuar(){
    window.location="blackjokes.html";

}



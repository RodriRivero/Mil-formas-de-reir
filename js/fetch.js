

function cargarjokes(){
    fetch('/audio.json/black.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta));

    fetch('/audio.json/green.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta));

    fetch('/audio.json/motiv.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta));

    fetch('/audio.json/reflex.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta));

    fetch('/audio.json/white.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta))
}
cargarjokes();
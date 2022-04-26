
const iconoMenu = document.querySelector('#icono-menu')
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');
    if(rutaActual == 'img/opem-menu.png'){
        e.target.setAttribute('src','img/open-menu2.png');
        }else{
            e.target.setAttribute('src','img/open-menu2.png');
}
});



//function joke(){
    //window.location = "jokes.html"}


// function saludo(){

   // let name = document.getElementById("usuario").value;
   // document.getElementById("usuario").innerHTML = 'que quieres hacer el dia de hoy '+ name + '?';}



//function saludo(){

    //let name = document.getElementById("txtEntrada").value;
    //document.getElementById("salida").innerHTML = 'que quieres hacer el dia de hoy '+ name + '?';


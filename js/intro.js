

// panel de opciones lateral

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



function joke(){
    window.location = "jokes.html"}

    
// funcion para el div desplegable

    const opcion = document.querySelectorAll('.opcion');

    opcion.forEach( e =>{
    
        e.addEventListener('click', function(e){
    
            const padre = e.target.parentNode;
    
            padre.children[1].classList.toggle('animation');
            padre.parentNode.children[1].classList.toggle('animation');
    
        })
    })
    





   //let nameuser = document.getElementById("usuario").value;
   //document.getElementById("usuario").innerHTML = 'que quieres hacer el dia de hoy '+ nameuser + '?';



//function saludo(){

    //let name = document.getElementById("usuario).value;
    //document.getElementById("salida").innerHTML = 'que quieres hacer el dia de hoy '+ name + '?';


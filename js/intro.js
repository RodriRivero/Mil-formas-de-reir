




// panel de opciones lateral

const iconoMenu = document.querySelector('#icono-menu')
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');
    if(rutaActual == 'img/opem-menu.png'){;
        }else{}
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








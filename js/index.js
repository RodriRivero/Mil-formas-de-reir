

// inicio de carga de la app 

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan= document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{

            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)*700)
        });

        setTimeout(()=>{

            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx+1)*200)
            })
    },4000);

        setTimeout(()=>{
        intro.style.top ='-100vh';
        },4300)
    })

})


function login(){

    let user =document.getElementById('usuario').value;
    let pass =document.getElementById('contraseña').value;

    if(user =='rivero' && pass =='123456' || user =='pia' && pass=='123456'|| user=='arturo' && pass=='123456' ){

        
        window.location="intro.html";
}
    else{
        //alert("usuario o contraseña incorrectas, intentelo nuevamente");

        Swal.fire({
            html:'<b>Usuario o Contraseña incorrectas, intentelo nuevamente</b>',
            icon:'error',
            confirmButtonText:'intentar nuevamente',
            padding:'1rem',
            timer:'9000',
            timerProgressBar:true,
            toast:true,
            confirmButtonColor:'black',
            showCloseButton:true,
            closeButtonAriaLabel:'cerrar alerta',
        })
    }
}


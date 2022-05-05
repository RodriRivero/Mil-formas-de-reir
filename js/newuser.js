
function newUser(){
        window.location="newuser.html";
    }

function captureData(){
    console.log("se guardo");
    function Person(usuario,contraseña){
        this.usuario=usuario;
        this.contraseña=contraseña;
        this.email=email;
    }
    let usuarioCapture = document.getElementById("usuario").value;
    console.log(usuarioCapture);
    let contraseñaCapture = document.getElementById("contraseña").value;
    console.log(contraseñaCapture);
    let emailCapture = document.getElementById("email").value;
    console.log(emailCapture);
    
    if(usuarioCapture ==='' || contraseñaCapture ===''|| emailCapture ===''){
        Swal.fire({

            title:'',
            html:'<b>Complete todos los campos!</b>',
            icon:'error',
            confirmButtonText:'Entendido',
            padding:'3rem',
            footer:'',
            width:'',
            timer:'9000',
            timerProgressBar:true,
            toast:true,
            confirmButtonColor:'black',
            showCloseButton:true,
            closeButtonAriaLabel:'cerrar alerta',

        })
}
    else{
        
        window.location="category.html" 
        
    }

    newUsuario = new Person (usuarioCapture,contraseñaCapture,emailCapture);
    console.log(newUsuario);
    add();
}
let database = [];
function add(){
    database.push(newUsuario);
    console.log(database);
    
}


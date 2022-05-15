



    let capda = document.getElementById("captured")
        capda.addEventListener("click",captureData)


function captureData(){
    console.log("se guardo");
    function Person(usuario,contraseña,palabraClave){
        this.usuario=usuario;
        this.contraseña=contraseña;
        this.palabraClave=palabraClave;
    }
    let usuarioCapture = document.getElementById('usuario').value;

    let contraseñaCapture = document.getElementById('contraseña').value;

    let palabraClaveCapture = document.getElementById('palabraClave').value;

    if(usuarioCapture ==='' || contraseñaCapture ===''|| palabraClaveCapture ===''){

        Swal.fire({
            html:'<b>Complete todos los campos!</b>',
            icon:'error',
            confirmButtonText:'Entendido',
            padding:'3rem',
            timer:'9000',
            timerProgressBar:true,
            toast:true,
            confirmButtonColor:'black',
            showCloseButton:true,
            closeButtonAriaLabel:'cerrar alerta',

        })
}
    else{   
        window.location="intro.html" 
    }

    newUsuario = new Person (usuarioCapture,contraseñaCapture,palabraClaveCapture);
    localStorage.setItem('nuevo usuario',JSON.stringify(newUsuario));
    console.log(newUsuario);

}



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
        alert("complete todos los campos por favor");
}
    else{
        
        window.location="intro.html" 
        
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


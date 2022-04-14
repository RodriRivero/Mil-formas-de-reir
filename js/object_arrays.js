
function captureData(){
    console.log("capturado");
    function Person(usuario,contraseña){
        this.usuario=usuario;
        this.contraseña=contraseña;
    }
    let usuarioCapture = document.getElementById("usuario").value;
    console.log(usuarioCapture);
    let contraseñaCapture = document.getElementById("contraseña").value;
    console.log(contraseñaCapture);

    newUsuario = new Person (usuarioCapture,contraseñaCapture);
    console.log(newUsuario);
    add();
}
let database = [];
function add(){
    window.location="jokes.html"
    database.push(newUsuario);
    console.log(database);

}
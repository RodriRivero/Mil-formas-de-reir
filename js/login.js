

function login(){

    let user =document.getElementById('usuario').value;
    let pass =document.getElementById('contraseña').value;

    if(user =='rivero' && pass =='123456' || user =='pia' && pass=='123456'|| user=='arturo' && pass=='123456' ){

        window.location="intro.html";
}
    else{
        alert("usuario o contraseña incorrectas, intentelo nuevamente");
    }
}

//function saludo(){

    //let name = document.getElementById("txtEntrada").value;
    //document.getElementById("salida").innerHTML = 'Hola, como estas '+ name + '?';



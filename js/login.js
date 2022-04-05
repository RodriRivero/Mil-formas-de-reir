

function login(){

    let user =document.getElementById('usuario').value;
    let pass =document.getElementById('contraseña').value;

    if(user =='rivero' && pass =='123456' || user =='pia' && pass=='123456'){

        alert('bienvenido a mi app web!!')

    window.location="questions.html";
}
    else{
        alert("por favor ingrese nuevamente sus datos");
    }
}
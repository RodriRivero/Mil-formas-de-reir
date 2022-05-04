
window.onload= function sal(){
(async () => {

  /* inputOptions can be an object or Promise */
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        '<span class="red" >Perfecto que  te sientas bien,sigue asi vas por el buen camino! </span>': 'Bien',
        'No te preocupes ,hoy puede mejorar todo,asi que estate tranquilo': 'Mas o menos',
        'Todos tienen un mal dia , pero todo pasa y seguro lo hara en esta ocasion tambien': 'Mal'
      })
    }, 1000)
  })
  
  const { value: color } = await Swal.fire({
    title: 'Hola!',
    html:'<b>Como te sientes el dia de hoy?</b>',
    input: 'radio',
    inputOptions: inputOptions,
    confirmButtonColor:'rgb(63,94,251)',
    inputValidator: (value) => {
      if (!value) {
        return 'Tienes que escoger una opcion'
      }
    }
  })
  
  if (color) {
    Swal.fire({ 
      title:`${color}`,
      html:'<b>Aqui tienes muchas opciones para elegir </b> ',
      confirmButtonText:'elegir',
      padding:'',
      footer:'',
      width:'',
      timer:'',
      timerProgressBar:false,
      toast:false,
      confirmButtonColor:'rgb(63,94,251)',
      showCloseButton:false, })
  }
  
  })()
}
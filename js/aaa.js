
window.onload= function sal(){
(async () => {

  /* inputOptions can be an object or Promise */
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        'bien': 'Bien',
        'mas o menos': 'Mas o menos',
        'mal': 'Mal'
      })
    }, 1000)
  })
  
  const { value: color } = await Swal.fire({
    title: 'Hola!',
    html:'<b>Como te sientes el dia de hoy?</b>',
    input: 'radio',
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return 'Tenes que escojer una opcion'
      }
    }
  })
  
  if (color) {
    Swal.fire({ 
      title:`Te sientes ${color}`,
      html:'Hoy tienes muchas opciones para  ',
      confirmButtonText:'elegir',
      padding:'',
      footer:'',
      width:'',
      timer:'',
      timerProgressBar:false,
      toast:false,
      confirmButtonColor:'',
      showCloseButton:false, })
  }
  
  })()
}

window.onload= function sal(){
(async () => {


  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        '<span class="animo" >" Aquel que tiene un porqué para vivir se puede enfrentar a todos los «cómos»."<br>(Friedrich Nietzsche)</span>': 'Bien',
        '<span class="animo" >" Los hombres olvidan siempre que la felicidad humana es una disposición de la mente y no una condición de las circunstancias."<br>(Locke)</span>': 'Mas o menos',
        '<span class="animo" > " Puede que no podamos controlar lo que nos pasa, pero podemos controlar lo que ocurre en nuestro interior." <br>(Benjamin Franklin)</span>': 'Mal'
      })
    }, 1000)
  })
  
  const { value: color } = await Swal.fire({
    title: '<b> Hola!</b>',
    html:'<b>Como te sientes el dia de hoy?</b>',
    input: 'radio',
    confirmButtonText:'Listo',
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
      html:' ',
      confirmButtonText:'Seguir',
      toast:false,
      confirmButtonColor:'rgb(63,94,251)',
      showCloseButton:false, })
  }
  
  })()
}
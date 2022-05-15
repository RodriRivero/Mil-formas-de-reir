
window.onload= function sal(){
(async () => {


  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        '<span class="animo" >" Aquel que tiene un porqué para vivir se puede enfrentar a todos los «cómos»."<br>(Friedrich Nietzsche)</span>': '<span class="emo" > &#128512<span/>',
        '<span class="animo" >" Los hombres olvidan siempre que la felicidad humana es una disposición de la mente y no una condición de las circunstancias."<br>(Locke)</span>': '<span class="emo" >&#128528;<span/>',
        '<span class="animo" > " Puede que no podamos controlar lo que nos pasa, pero podemos controlar lo que ocurre en nuestro interior." <br>(Benjamin Franklin)</span>': '<span class="emo" >  &#128557</span>'
      })
    }, 1000)
  })
  
  const { value: color } = await Swal.fire({
    title: '<b> <span class="animo2" >Hola! Bienvenido!!</b></span>',
    html:'<span class="animo" ><b>Como te sientes el dia de hoy?</b></span>',
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
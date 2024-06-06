//Alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('botonAlert')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert(document.getElementById('botonAlert').getAttribute('data-bs-contenido'), document.getElementById('botonAlert').getAttribute('data-bs-tipo'))
    //cambié el mensaje y el tipo de alert con document.getElementById y getAttribute detectando mis atributos data 
  })
}

//Popover

//probé el querySelector con el data-bs-container=body en vez de data-bs-toggle=popover
const popoverTriggerList = document.querySelectorAll('[data-bs-container="body"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Toast

//agregué el id que cree botonToast
const toastTrigger = document.getElementById('botonToast')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
    //ocupe el document.getElementById, getAttribute y innerText para cambiar el titulo y el contenido con data-bs
    document.getElementById('titularToast').innerText = document.getElementById('botonToast').getAttribute('data-bs-titulo')
    document.getElementById('contenidoToast').innerText = document.getElementById('botonToast').getAttribute('data-bs-contenido')
  })
}



//Offcanvas
document.getElementById('botonOffcanvas').addEventListener('click', function () {
    //use querySelector para seleccionar el div con la clase .offcanvas-body junto con un innerText
    //para modificar el cuerpo del offcanvas
    document.querySelector('.offcanvas-body').innerText = 'Probando el componente offcanvas!';
});
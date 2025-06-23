function toggleProteccionDatos() {
  const section = document.getElementById('proteccion-datos');
  if (section.classList.contains('hidden')) {
    section.classList.remove('hidden');
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    section.classList.add('hidden');
  }
}

function mostrarInfoCurso(texto, gratuito = false) {
  const popup = document.getElementById('popup-curso');
  document.getElementById('contenido-curso').innerHTML = texto;
  const botonDocs = document.getElementById('boton-docs');
  if (gratuito) {
    botonDocs.classList.remove('hidden');
  } else {
    botonDocs.classList.add('hidden');
  }
  popup.classList.remove('hidden');
}

function cerrarPopupCurso() {
  document.getElementById('popup-curso').classList.add('hidden');
}

function mostrarPago() {
  document.getElementById('popup-pago').classList.remove('hidden');
}

function cerrarPago() {
  document.getElementById('popup-pago').classList.add('hidden');
}

function seleccionarMetodo(metodo) {
  document.getElementById('form-tarjeta').classList.toggle('hidden', metodo !== 'tarjeta');
  document.getElementById('form-bizum').classList.toggle('hidden', metodo !== 'bizum');
}

function validarPago(event) {
  event.preventDefault();
  const metodo = document.querySelector('input[name="metodo"]:checked');
  if (!metodo) {
    alert('Seleccione un método de pago.');
    return;
  }
  alert('Curso pagado con éxito. Nos comunicaremos con usted en las próximas 24 hs laborales.');
  cerrarPago();
}

function mostrarDocs() {
  document.getElementById('popup-docs').classList.remove('hidden');
}

function cerrarDocs() {
  document.getElementById('popup-docs').classList.add('hidden');
}

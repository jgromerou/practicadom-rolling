function cambiarTitulo() {
  console.log('cambiarTitulo');

  let titulo = document.getElementById('tituloPrincipal');
  console.log(titulo);
  titulo.className = 'text-primary';
  titulo.innerHTML = 'Nuevo Título';
}

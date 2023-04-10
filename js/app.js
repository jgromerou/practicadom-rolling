let btnVerMas = document.querySelector('#btnVerMas');
//agregar un manejador de Eventos
btnVerMas.addEventListener('click', mostrarOcultarParrafo);
//funcion con argumentos
//btnVerMas.addEventListener('click', (arg1, arg2) => {});

function cambiarTitulo() {
  let titulo = document.getElementById('tituloPrincipal');
  titulo.className = 'text-primary';
  titulo.innerHTML = 'Nuevo Título';
}

function mostrarOcultarParrafo() {
  //Traer el contenedor Padre
  let section = document.getElementById('contenedorPadre');

  if (btnVerMas.textContent === 'Ver mas...') {
    console.log(btnVerMas.innerHTML);
    //crear el elemento
    let parrafoNuevo = document.createElement(`p`);
    parrafoNuevo.innerText = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam autem
non optio doloribus voluptates, iusto adipisci doloremque sed
cupiditate numquam est consectetur qui eligendi, soluta veritatis esse
aliquam blanditiis inventore. Aperiam dolor iusto qui nisi ullam`;
    parrafoNuevo.className = 'lead';
    //lo agrega antes del primer hijo que seria h2
    //section.prepend(parrafoNuevo);

    section.insertBefore(parrafoNuevo, btnVerMas);
    btnVerMas.className = 'btn btn-outline-danger';
    btnVerMas.innerHTML = 'Ocultar';
  } else {
    //console.log(section.children[2]);
    //section.removeChild(section.children[2]);

    //resetear el botón
    btnVerMas.innerHTML = 'Ver mas...';
    btnVerMas.className = 'btn btn-outline-primary';
  }
}

let publicaciones = [];

fetch('datos-editoriales.json')
    .then(response => response.json())
    .then(data => {

        publicaciones = data;

        console.log("Artículos cargados:", publicaciones);

    });

const buscador = document.getElementById('query');

buscador.addEventListener('input', function () {

    const texto = this.value.toLowerCase();

    const resultados = publicaciones.filter(item =>
 
    item.titulo.toLowerCase().includes(texto) ||

    item.descripcion.toLowerCase().includes(texto)
    );

    mostrarResultados(resultados);

});

function mostrarResultados(resultados) {

    const contenedor =
        document.getElementById('search-results');

    contenedor.innerHTML = '';

    if (resultados.length === 0) {

        contenedor.innerHTML =
            '<p>No se encontraron resultados.</p>';

        return;
    }

    resultados.forEach(item => {

        contenedor.innerHTML += `
            <article class="mini-post">
            function mostrarResultados(resultados) {

    const contenedor =
        document.getElementById('search-results');

    contenedor.innerHTML = '';

    resultados.forEach(item => {

        contenedor.innerHTML += `
  <article>
    <h4>
      <a href="${item.url}">
        ${item.titulo}
      </a>
    </h4>
  </article>
`; 
    });

}
                }
                
            </article>
        `;
    });

}

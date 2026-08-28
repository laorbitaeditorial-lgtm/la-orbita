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

        
            function mostrarResultados(resultados) {
    const contenedor = document.getElementById('search-results');
    
    // 1. Limpiamos el contenedor antes de la nueva búsqueda
    contenedor.innerHTML = '';

    // 2. Recorremos los resultados e insertamos el HTML
    resultados.forEach(item => {
        contenedor.innerHTML += `
            <article class="mini-post">
                <h4>
                    <a href="${item.url}">
                        ${item.titulo}
                    </a>
                </h4>
            </article>
        `;
    }); // <- Aquí se cierra correctamente el forEach
} // <- Aquí se cierra correctamente la función
                
            </article>
        `;
    });

}

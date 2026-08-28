let publicaciones = [];

fetch('datos-editoriales.json')
    .then(response => response.json())
    .then(data => {

        publicaciones = data.articulos;

        console.log("Artículos cargados:", publicaciones);

    });

const buscador = document.getElementById('query');

buscador.addEventListener('input', function () {

    const texto = this.value.toLowerCase();

    const resultados = publicaciones.filter(item =>

        item["titulo\n"]?.toLowerCase().includes(texto) ||

        item["autor\n"]?.toLowerCase().includes(texto) ||

        item.categoria?.Value?.toLowerCase().includes(texto) ||

        item.estado?.toLowerCase().includes(texto)

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
                <h4>${item["titulo\n"]}</h4>
                <p>${item["autor\n"]}</p>
                <p>${item.categoria.Value}</p>
                <p>${item.estado}</p>
            </article>
        `;
    });

}

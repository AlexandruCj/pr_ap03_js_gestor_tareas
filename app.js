const agregar = document.querySelector("#btnAgregar");
const lista = document.querySelector("#listaTareas");
const resultado = document.querySelector("#Resultado");

const SinTexto = (texto) => texto.trim() === "";

function BorrarLista(li) {

    li.remove();
}
agregar.addEventListener("click", function (event) {
    const texto = document.querySelector("#tareaInput").value;

    if (SinTexto(texto)) {
        resultado.textContent = `No has introducido nada.`
        setTimeout(function () {
            resultado.innerHTML = "";
        }, 1000
        );
    } else {
        let li = document.createElement("li")
        let borrar = document.createElement("button");

        borrar.textContent = "Borrar";

        borrar.addEventListener("click", () => {
            li.remove();
        });

        li.textContent = texto;
        li.appendChild(borrar);

        lista.appendChild(li);

        li.addEventListener("click", function (event) {
            li.classList.toggle("completada");
        });
    }

});
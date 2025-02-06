//Variables
let amigos = [];
const lista = document.querySelector("#listaAmigos");

//Funciones
function agregarAmigo() {
    const amigo = document.querySelector("#amigo").value;

    if (amigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        mostrarAmigos();
    }

    document.querySelector("#amigo").value = "";
}

function mostrarAmigos() {
    
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        lista.appendChild(listItem);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }

    lista.innerHTML = "";
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    amigos = [];

    setTimeout(() => {
        resultado.innerHTML = "";
    }, 3000);
}

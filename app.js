// Este desafío tiene como objetivo fortalecer tus habilidades en lógica de programación. 
// Desarrolla la solución implementando la lógica adecuada.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Verificar que el campo no esté vacío
    if (!nombreAmigo) {
        alert("Por favor, ingresa un nombre.");
        return; // Detiene la ejecución si el campo está vacío
    }

    // Evitar nombres duplicados
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el input después de agregar el nombre
    inputAmigo.value = "";

    // Refrescar la lista en la interfaz
    actualizarLista();
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada nombre como un elemento de lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre correspondiente al índice generado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    document.getElementById('resultado').innerHTML = 
        `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}


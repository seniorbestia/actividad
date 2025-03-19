// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución de la función
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert(`Este nombre ${nombreAmigo} ya ha sido agregado.`);
        return;
    }

    amigos.push(nombreAmigo);


    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista en el HTML
    actualizarLista();

}



// Función para actualizar la lista de amigos en la interfaz

// Función para seleccionar un amigo aleatorio


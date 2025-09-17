// Código JavaScript en archivo separado
console.log("Este código viene de un archivo externo");

// Verifica si el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log("El DOM está completamente cargado");
    document.querySelector('h1').style.color = 'blue';
});

// Diferentes formas de mostrar información en la consola
console.log("Mensaje informativo");
console.warn("Mensaje de advertencia");
console.error("Mensaje de error");
console.info("Mensaje informativo");

// Medición de tiempo
console.time("operacion");
for(let i = 0; i < 1000; i++) {
    // Simulamos una operación
    Math.random();
}
console.timeEnd("operacion");

// Agrupación de mensajes
console.group("Mi grupo de mensajes");
console.log ("  _____");
        console.log ("  | ___ |");
        console.log ("  ||   ||  J.O.");
        console.log ("  ||___||");
        console.log ("  |   _ |");
        console.log ("  |_____|");
        console.log (" /_/_|_\\_\\----.");
        console.log ("/_/__|__\\_\\   )");
        console.log ("             (")
        console.log ("            []")
        console.log ("daniela");

console.groupEnd();
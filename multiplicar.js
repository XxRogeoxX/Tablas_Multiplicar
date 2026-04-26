function generarTablas() {
    let input = document.getElementById("txtValor");
    let contenedor = document.getElementById("tablas");
    let valor = input.value;

    // Validación: Si el input está vacío
    if (valor === "") {
        contenedor.innerHTML = "<p class='empty-state' style='color: #e64a19;'>¡Oye! Primero escribe un número arriba 😊</p>";
        return;
    }

    let contenido = "<table><thead><tr><th>Operación</th><th>Resultado</th></tr></thead><tbody>";
    
    for (let i = 1; i <= 12; i++) { // Ampliado a 12 que es común en escuelas
        let resultado = valor * i;
        contenido += `<tr>
                        <td>${valor} x ${i}</td>
                        <td><strong>${resultado}</strong></td>
                      </tr>`;
    }
    
    contenido += "</tbody></table>";
    contenedor.innerHTML = contenido;
}

// Añadir soporte para la tecla Enter
window.onload = function() {
    document.getElementById("txtValor").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            generarTablas();
        }
    });
};
function generarTablas(){
    let contenedor = document.getElementById("tablas");
    //contenedor.innerHTML = " <h1> Probando </h1>";
    let contenido = "<table><thead><tr><th>Operación</th><th>Resultado</th></tr></thead><tbody>";
    let valor = document.getElementById("txtValor")

    
    let tabla = valor.value;
    for (let i = 1; i <= 10; i++) {
        // Calculamos el resultado en cada vuelta
        let resultado = tabla * i;
        
        // Imprimimos con el formato solicitado: 3x1=3
        
        contenido += "<tr><td>"+(tabla + "x" + i + "</td><td>" + resultado)+"</td></tr>";
        
    }
    contenido += "</tbody></table>"
    
    contenedor.innerHTML = contenido;
}
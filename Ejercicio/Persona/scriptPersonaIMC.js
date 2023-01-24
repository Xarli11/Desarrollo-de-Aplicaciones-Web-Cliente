let buttonIMC = document.getElementById("imc");
let resultado = document.getElementById("resultado");
buttonIMC.addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let sexo = document.getElementById("sexo").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let persona = new Persona(nombre, edad, dni, sexo, peso, altura);
    let imc = persona.calcularIMC();
    let esMayorDeEdad = persona.esMayorDeEdad();
    resultado.innerHTML = `IMC: ${imc} <br> Mayor de edad: ${esMayorDeEdad} <br> Información: ${persona.toString()}`;
});


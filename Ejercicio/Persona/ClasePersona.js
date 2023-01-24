class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}

Persona.prototype.calcularIMC = function() {
    let imc = this.peso / (this.altura * this.altura);
    if (imc < 20) {
        return -1;
    } else if (imc >= 20 && imc <= 25) {
        return 0;
    } else {
        return 1;
    }
}

Persona.prototype.esMayorDeEdad = function() {
    return this.edad >= 18;
}

Persona.prototype.comprobarSexo = function(sexo) {
    if (sexo != "H" && sexo != "M") {
        this.sexo = "H";
    }
}

Persona.prototype.toString = function() {
    return `Nombre: ${this.nombre} <br> Edad: ${this.edad} <br> DNI: ${this.dni} <br> Sexo: ${this.sexo} <br> Peso: ${this.peso} <br> Altura: ${this.altura}`;
}

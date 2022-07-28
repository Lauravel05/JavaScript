/* 

---------- TIPADO ----------

string= cadena de texto alfanumérica
Number= Numeros enteros o con decimales
Boolean= True - false


---------- CUADROS DE DIÁLOGO ----------

alert("") para mostrar mensajes de alerta al usuario 
confirm("") para pedir confirmacion al usario sobre una acció ACEPTAR o CANCELAR
prompt("") preguntarle al usuario un dato en la pantalla


---------- CONSOLE ----------

.log(mostrar en la consola)
.warm(signo de advertencia MENSAJE EN AMARILLO)
.error(mostrar signo error MENSAJE EN ROJO)


----------- DECLARAR VARIABLE ----------

let miVariable
let miVarible2 = "Algo"

let nombre = "Coder"
let apellido = "House"
let fechaNacimiento = "21/03/1975"
const nombreCompleto = "laura velandia

let numeroA = 21
let numeroB = 3

let resultado = numeroA / numeroB
let empresa = nombre + " " + apellido


let datoIngresado = prompt("Ingrese numero de su cuenta bancaria")
console.log("NUMERO DE CUENTA:", datoIngresado)


EJEMPLO: 

let username = "coderhouse";

if (username == "coderhouse") {
    console.log(Bienvenido,username)
}

if (username == "laura") {
    console.warm(Bienvenido,username)
}


---------- SENTENCIA IF - ELSE ----------

EJEMPLOS: 

1. 

let username = prompt("Ingrese suuombre") 

if (username == "CoderHouse") {
    console.log(Bienvenido,username)
} else {
    console.warn("No se reconoce el usuario")
}


2. 

let miOferta = prompt("Ingrese su oferta:")

if (miOferta < 22){
    console.error("Su oferta es demasiado baja")
}

else if (miOferta < 30){
    console.error("Sigue muy baja, esturate un poco")
}

else if (miOferta >= 80){
    console.log("Trato hecho")
}


---------- IF - ELSE Y OPERADOR LOGICO AND (&&) Y OR (||) ----------

EJEMPLOS && (AND):

1.

let username = prompt ("Ingres su nombre:")
let password = prompt ("Ingrese contraseña")

if (username == CoderHouse && password == 123456) {
    console.log ("Bienvenido, username")
} else {
    console.warn("No se reconoce el usuario y/ la contraseña");
}

2.

let años = 19

if (años == 19 && años < 10){
    document.write("Correcto! ambas condiciones son verdaderas")
}

else {
    document.write("Una o ambas condiciones son falsas :(")
}

3. 

let manzanas = 19

if (manzanas == 19 && manzanas < 30){
    document.write("Correcto! ambas condiciones son verdaderas")
}

else {
    document.write("Una o ambas condiciones son falsas :(")
}

EJEMPLOS || (OR):

1. 

let edad = 18;

if (edad == 10 || edad < 25) {
    document.write("Correcto! solo es necesario que una de las dos condiciones sea verdadera")
}

else{
    document.write("Las condiciones son falsas")
}

2. 

let edad = 18;

if (edad == 10 || edad < 15) {
    document.write("Correcto! solo es necesario que una de las dos condiciones sea verdadera")
}

else{
    document.write("Las condiciones son falsas")
}

---------- CICLOS----------

i++
i += 1
i = 1 + 1 
 
-- CICLOS POR CONTEO (FOR)

1. CICLOS DE ITERACIÓN ESTÁTICO

EJEMPLO:

for (let i = 0; i < 21; i++){
    console.log("Iteracion Nro.", i)
}

2. CICLOS DE ITERACIÓN DINÁMICO

EJEMPLO:

let limite = parseInt(prompt("Ingresa un número:"))

for (let i = 0; i < limite; i++){
    console.log("Iteracion Nro.", i)
}

-- CICLOS CONDICIONALES (WHILE Y DO...WHILE)

let seguimos = true
let num = parseInt(prompt("Ingrese numero:"))
let factor = 1 

while(seguimos){
    console.log("Resultado", num * factor)
    seguimos = confirm("¿Siguiente multipicación?")
    if (seguimos){
        factor++
    }
}

---------- FUNCIONES ----------

EJEMPLOS:

1.

let nombreCompleto = "Laura Velandia" 

function verNombreCompleto (){
    console.log("hola", nombreCompleto)
}

2.

function calcular() {
    let primerNro = parseInt(prompt("Ingresa el primer nro."))
    let segundoNro = parseInt(prompt("Ingresa el segundo nro."))
    let operador = prompt("Selecciona la operación: +, -, *, /")
        console.log("Resultado", realizarCalculo(primerNro, segundoNro, operador))
}

3.

function calcular1 (){
    let num1 = parseInt(prompt("Ingres un numero"))
    let num2 = parseInt(prompt("ingresa un segundo numero"))
    let operador = prompt("Selecciona la operacion + - / + ")
        console.log("Resultado: ", calculo (numero1, numero2, ope))

}

4.

function calculo(_numero1, _numero2, ope){
    switch(ope){
        case"+":
           return num1 + num2
            
        case"-":
           return num1 - num2
        case"*":
            return num1 * num2
        case"/":
            return num1 / num2
        default:
            return "Error en el calculo"

    }

}
*/


















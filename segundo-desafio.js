// #1 - Primer Condicional verifica si el nombre es igual al que está registrado en la base de datos.

let nombre = prompt("Por favor ingrese su nombre").toLowerCase();
const dataBase = "jean";

if (nombre == dataBase) {
  swal(`Hola ${dataBase}, que bueno de verte de nuevo!`);
} else {
  swal(`Lo sentimos ${nombre}, no hemos encontrado tu nombre en la base de datos :(`);
}
 

// #2 Verifica si es mayor o menor de edad, en caso de ser menor de edad le indica la cantidad de años que le faltan para conducir

/* let edad = Number(prompt("¿Cuantos años tienes?"));
let tiempo = 17 - edad;

if (edad >= 17) {
  swal("Excelente ya tienes edad para conducir!");
} else if (tiempo === 1) {
  swal(`Lo sentimos te falta ${tiempo} año para conducir!`);
 } else if (edad <= 0) {
    swal(`Lo sentimos, usted aun no ha nacido! `);
}  else {
  swal(`Lo sentimos te faltan ${tiempo} años para conducir!`);
}
 */

// #3 Ingresar un numero y determinar si esta dentro del rango 

/* let numero = Number(prompt("Por favor ingrese un numero del 10 al 50!"));

if(numero >= 10 && numero <= 50){
    swal(`Awesome, El numero: ${numero} esta en el rango permitido!`);
}else{
    swal(`Lo sentimos el numero: ${numero} no pertenence al rango permitido!`);
} */
/*
// ejercicio 1

let numero = 15

for (let i = 0; i <= 10; i++) {

    console.log(numero * i);
}
  
// ejercicio 2
  
  function acumularNumeros() {
    let suma = 0;
    let numero;
  
    do {
      numero = parseInt(prompt("ingresa un numero o (0 para terminar):")); 
      suma += numero;
    } while (numero !== 0);
  
    console.log("la suma total es", suma);
  }
  acumularNumeros()
  

  // ejercicio 3

  function jugarAdivinanza() {
    let numeroIncognita = Math.floor(Math.random() * 100) + 1;
    let intentos = 3;
  
    while (intentos > 0) {
        let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 100:"));
  
        if (numeroIngresado === numeroIncognita) {
            console.log("¡Ganaste! ¡Adivinaste el número!");
            break;
        } else if (numeroIngresado < numeroIncognita) {
            console.log("El número ingresado es menor que el numero incognita. Vuelve a intentarlo.");
        } else {
            console.log("El número ingresado es mayor que el numero incognita. Vuelve a intentarlo.");
        }
  
        intentos--;
    }
  
    if (intentos === 0) {
        console.log("Se acabaron los intentos. El número era", numeroIncognita,"Inténtalo de nuevo!");
    }
  }
  jugarAdivinanza()
  
//ejercicio 4
function esPrimo(numero){
    if(numero <=1 ){
      return false; 
    }
    let divisor =2;
    while (divisor <= Math.sqrt(numero)){
      if (numero % divisor === 0){
        return false;
      }
      divisor ++
    }
    return true
  }

  let numero = 13
  let elNumeroEsPrimo = esPrimo(numero)
  
  if(elNumeroEsPrimo) {
  console.log(numero,"es un numero primo");
  }else {
    console.log(numero,"no es un numero primo");
  }
    
// ejercicio 5

function mostrarDivisores(numero) {
    let divisores = []
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0){
            divisores.push(i)
        } 
    }
    console.log("los divisores de", numero,"son:",divisores.join());
}

let numeroIngresado = parseInt(prompt("ingresa un numero"))
mostrarDivisores(numeroIngresado)

//ejercicio 6

//Dado un array de 10 elementos, realizar un programa que recorra ese array y
//muestre un mensaje por consola con cada uno de los elementos del array.

let equiposMx = ["El Monterrey","El america","Los tigres","El cruz azul","las chivas","El santos laguna","El atlas","El pachuca","El Puebla","El necaxa" ]

for (let i = 0; i < equiposMx.length; i++) {
   console.log(i + " equipo de primera division");
    
}

//ejercicio 7
//Dado un array de 10 numeros, realizar un programa que muestre por consola el
//doble de cada uno de los elementos.

let numeros = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i <= numeros.length; i++) {
    console.log(i * 2);
    
}
//ejercicio 8

let familia = [
    {
        nombre: "Bernardo",
        edad:41,
        apellido:"Rodriguez",
        mascota: true
    },
    {   nombre: "Daniela",
        edad:33,
        apellido:"Servin",
        mascota: true
    },

    {   nombre: "Irma",
        edad:65,
        apellido:"Quezada",
        mascota: false
    },
    {
        nombre: "Jose",
        edad:14,
        apellido:"Rodriguez",
        mascota: false
    },
    {
        nombre: "Lucia",
        edad:38,
        apellido:"Rodriguez",
        mascota: true
    }
    
]

for (let i = 0; i < familia.length; i++) {
    let presentacion = "Hola mi nombre es "+familia[i].nombre+" mi apellido es "+familia[i].apellido+" tengo "
    + familia[i].edad+" años y "+familia[i].mascota+" tengo mascota"
    console.log(presentacion);
}

//ejercicio 9

//Dado un array de 10 numeros, realizar un programa que recorra el array y solo
//muestre los numeros impares.

let numeros = [4,45,6,78,33,21,90,77,88,29]

for (let i = 0; i < numeros.length; i++) {
    if (numeros [i] % 2 !=0) {
        console.log(numeros [i]);
    } 
}

//ejercicio 10

//Realizar un programa que permita la entrada de numeros y calcule la suma de los
//numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
//el usuario ingresa un 0.

let sumaPares = 0
let sumaImpares = 0

do {
    numero = parseInt(prompt("ingrese un numero"))
    if (numero % 2 == 0) {
        sumaPares += numero;
    } else{
        sumaImpares += numero;
    }
} while (numero != 0);

console.log("suma de numeros pares:" + sumaPares);
console.log("suma de numeros impares" + sumaImpares);

//ejercicio 11

//Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//numero mas grande.

let numeros = [66,12,10,89,34,99,63,102,62,91]
let maximo = numeros[0]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]> maximo) {
        maximo = numeros [i];
        
    }
}
console.log("el numero mas grande es:" + maximo);

//ejercicio 12

//Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//numero mas chico.

let numeros = [66,12,10,89,34,99,63,102,62,91]
let minimo = numeros[0]

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < minimo) {
        minimo = numeros [i];
        
    }

}
console.log("el numero mas pequeño es:" + minimo);

//ejercicio 13

let jugador1 = prompt("ingrese el nombre del jugador 1")
let jugador2 = prompt("ingrese el nombre del jugador 2")

let ganador = false

while (ganador == false) {
 juegoJugador1 = parseInt(prompt("ingresa tu opcion a jugar (1-piedra, 2-papel, 3 -tijera) ingresa el numero de la opcion que vas a jugar"))
 juegoJugador2 = parseInt(prompt("ingresa tu opcion a jugar (1-piedra, 2-papel, 3 -tijera) ingresa el numero de la opcion que vas a jugar"))
    
if (juegoJugador1 == 1 && juegoJugador2 == 3 || juegoJugador1 == 2 && juegoJugador2 == 1 || juegoJugador1 == 3 && juegoJugador2 == 2) {
    ganador = true
    console.log("felicidades gana jugador 1 "+jugador1);
    
}else if (juegoJugador2 == 1 && juegoJugador1 == 3 || juegoJugador2 == 2 && juegoJugador1 == 1 || juegoJugador2 == 3 && juegoJugador1 == 2){
    ganador = true
    console.log("felicidades gana jugador 2 "+jugador2);
    

}else{
    alert("empate! vuelve a intentarlo")
    console.log("hay empate");
}

}

//14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.
//let asterisco = "* "

for (let i = 1; i <= 5; i++) {
        console.log(asterisco);
        asterisco += "* "
}


//15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
//pero invertido.

let asteriscoIvert = "* * * * *"

for (let i = 5; i >= 1; i--) {
        console.log(asteriscoIvert);
        asteriscoIvert = asteriscoIvert.substring(0, asteriscoIvert.length -2)
    }


//ejercicio 16

//Dado un array de 10 numeros desordenados, realizar un programa que imprima por
//pantalla el array ordenado.

let numeros = [5,98,34,22,4,9,48,23,99,12]

for (let i = 0; i < numeros.length; i++) {
    for (let j = 1; j < numeros.length - i; j++) {
        if (numeros[j - 1] > numeros [j]) {
            let temp = numeros [j-1];
            numeros[j -1] = numeros[j];
            numeros[j] = temp
            
        }
    }
}
console.log("array ordenado");
*/
    
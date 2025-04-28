//lenguaje de programacion 

var mivariable = 'hola'// no se usa
let mivariable2 = 'varable con let'//solo vive en el scope 
const miveriable3 = "constante no cambia los valores"

function test(){ //para hacer una funcion
    let mivariable4 = ''
}

const hola = 'hola leo';
console.log(hola);//es el equivalente a un print



// bucle for 
const arrayNumeros = [1,2,3];

for(let i = 0; i<arrayNumeros.length; i++){
    console.log(arrayNumeros)
}



const numero1 = 0.5
const numero2 = 100

if (numero1 < numero2) {
   console.log(`el numero ${numero2} es mayor`)
}
 
else {
    console.log(`el numero es menor a ${numero1}`)
}

let numero = 99
let contador = 0
while(contador <= numero){
    contador++
    console.log(`el contador esta en ${contador}`);
}

let numero4 = 4

let suma = 0
while(suma <= numero4 ){
    
   suma += suma
   console.log(`la suma da ${suma}`)
}
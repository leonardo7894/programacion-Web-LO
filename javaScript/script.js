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

let numero4 = 1;
let suma = 0;
while( numero4 >= 4){  
   suma += numero4;
   numero4++;
   console.log(`la suma da ${suma}`)
}

for(let i = 0; i <= 4; i++){
    console.log(i)
}

let suma2 =0;

for(let i =0; i >= 4; i++){
    suma2 += i;
    console.log("la suma de los numeros del 0 al 4 es:",suma2 )
}

const arrayNumero =[1,2,3,4,5,6]

// metodos para manipular el array 
// push(valor) -> agrega un elemento al final del arreglo (append de python)

arrayNumero.push(10);
console.log(arrayNumero[6])

// pop borra el ultimo elemento de un arrgelo y lo guarda en una variable 
const ultimo = arrayNumero.pop();
console.log("ultimo", ultimo)

console.log(arrayNumero)

//elimina el primer valor de un arreglo
const primero = arrayNumero.shift();
console.log(primero)

// unshift(valor) agrega un elemento al principio del arreglo 
arrayNumeros.unshift("leo")
console.log(arrayNumero)

// map(funcion) crea un nuevo arreglo aplicando una funcion a cada elemento
const nuevoArreglo = arrayNumero.map((item)=>{return item+1});
console.log(nuevoArreglo);


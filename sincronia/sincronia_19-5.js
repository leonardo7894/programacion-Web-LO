// ste timeout
//recibebe por parametros una funcion y un valor numerico en milisegundos 
const button = document.getElementById('boton');
button.addEventListener('click', ()=> {
 setTimeout(() => {
    alert("HOLA :)");

 },3000);
 });
// se ejecuta despues de tres segundos

/*let contador = 0;
setInterval(() => {
   contador ++;
   console.log("contador:",contador) 
}, 1000);
*/
// metodos para consumir un API
// get,post,put,delete
const array = fetch("https://rickandmortyapi.com/api/character")
  .then(data => data.json())
  .then(hola => console.log(hola.results));


async function getCharacters() {

    try {
    const hola = await fetch("https://rickandmortyapi.com/api/character")
    const data = await hola.json()

    data.results.map((item) => {
     console.log(item);
});
} catch (error){
    console.log(error)
}
}
getCharacters();


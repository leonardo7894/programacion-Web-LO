const inventario=[];

inventario.push({ nombre: "reloj", precio: 2200, categoria: "Electrónica" })
inventario.push({ nombre: "anillo inteligente", precio: 10876, categoria: "Electrónica" });
inventario.push({ nombre: "pc gamer", precio: 63640, categoria: "Electrónica" });
inventario.push({ nombre: "tablet", precio: 12347, categoria: "Electrónica" });

console.log("los productos");
inventario.forEach(producto => console.log(`nombre: ${producto.nombre} categoria: ${producto.categoria} precio: ${producto.precio}`));

let productosElectronicos = inventario.filter(producto => producto.nombre);
console.log("nombres de los productos electronicos");
console.log(productosElectronicos);

let nombresdeProductos = inventario.map(producto => producto.nombre);
console.log("nombre de los productos electronicos");
console.log(nombresdeProductos)
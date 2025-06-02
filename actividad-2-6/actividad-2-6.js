const usuario = "leonardo";
const contraseña = "1245";
const id = "80";

function unicoroneo() {
  const input = document.getElementById("usuario").value;
  const input2 = document.getElementById("contraseña").value;
  const text = input.value;
  console.log(text);
  let obj = { usuario: text };
  if (text !== "" && input === "leonardo" && input2 === "1245") {
    alert("te has logueado");
  } else {
    alert("usuario o contraseña incorrecta");
  }
}

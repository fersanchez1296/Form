const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const invalid = document.querySelector(".invalid");
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros
  xpRegSoloNumeros:/^[0-9]+$\{5,}/
};

const validadFormulario = (e) => {
  switch (e.target.name) {
    case "full-name":
      console.log("funciona");
      break;
    case "email":
      console.log("funciona");
      break;
    case "password":
      console.log("funciona");
      break;
    case "address":
      console.log("funciona");
      break;
    case "city":
      console.log("funciona");
      break;
    case "state":
      console.log("funciona");
      break;
    case "zipCode":
      validarZipCode(e);
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validadFormulario);
  input.addEventListener("blur", validadFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault;
});

//Funciones
function validarZipCode(e){
  if(isNaN(e.target.value)){
    e.target.classList.add("border-danger");
    e.target.classList.add("opacity-100", "text-danger");
  }else{
    if (e.target.value.length < 5 || e.target.value.length > 5) {
      e.target.classList.add("border-danger");
      e.target.classList.add("opacity-100", "text-danger");
    } else if (e.target.value.length === 5) {
      e.target.classList.add("border-success", "text-success");
      e.target.classList.remove("opacity-100","text-danger","border-danger");
    }
  }
}
const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const invalid = document.querySelector(".invalid");

//Agregar los objetos para direccion, ciudad y estado
const campos = {
  fullName:false,
  email:false,
  password:false,
  zipCode:false

}

const validadFormulario = (e) => {
  switch (e.target.name) {
    case "full-name":
      validarName(e);
      break;
    case "email":
      validarEmail(e);
      break;
    case "password":
      validarPassword(e);
      break;
    
    //Agregar las funciones
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
  e.preventDefault();
  //Agregar los objetos de direccion, ciudad y estado
  if(campos.fullName && campos.email && campos.password && campos.zipCode){
    //Cambiar por modal
    alert("todo bien pana");
    formulario.reset();
  }else{
    //Cambiar por modal
    alert("todo mal pana");
  }
});

//Funciones
function validarName(e) {
  let letters = /^[a-zA-Z ]+$/;
  let arrayNames = e.target.value.split(" ");
  let words = arrayNames.length;

  if (e.target.value.match(letters)) {
    if (words <= 1) {
      e.target.classList.add("border-danger");
      e.target.classList.add("opacity-100", "text-danger");
      campos["fullName"] = false;
    } else if (e.target.value.length >= 5 && words >= 2){
      e.target.classList.add("border-success", "text-success");
      e.target.classList.remove("opacity-100", "text-danger", "border-danger");
      campos["fullName"] = true;
    }
  } else {
    e.target.classList.add("border-danger");
    e.target.classList.add("opacity-100", "text-danger");
    e.target.classList.remove("border-success", "text-success");
    campos["fullName"] = false;
  }
}

function validarEmail(e) {
  let email = e.target.value;
  let arroba = email.indexOf("@");
  let punto = email.lastIndexOf(".");
  extension = email.split(".")[1];

  if (arroba < 1 || punto - arroba < 2 || email === "") {
    e.target.classList.add("border-danger");
    e.target.classList.add("opacity-100", "text-danger");
    e.target.classList.remove("border-success", "text-success");
    campos["email"] = false;
  } else {
    if (extension.length > 3) {
      e.target.classList.add("border-danger");
      e.target.classList.add("opacity-100", "text-danger");
      e.target.classList.remove("border-success", "text-success");
      campos["email"] = false;
      return;
    }
    e.target.classList.add("border-success", "text-success");
    e.target.classList.remove("opacity-100", "text-danger", "border-danger");
    campos["email"] = true;
  }
}

function validarPassword(e) {
  console.log(e.target.value)
  /*
    Minimo 8 caracteres
    Maximo 15
    Al menos una letra mayuscula
    Al menos una letra minuscula
    Al menos un digito
    No espacios en blanco
    Al menos un caracter especial
  */
  let exprecionRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,30}$/;
  if (exprecionRegular.test(e.target.value)) {
    e.target.classList.add("border-success", "text-success");
    e.target.classList.remove("opacity-100", "text-danger", "border-danger");
    campos["password"] = true;
  } else {
    e.target.classList.add("border-danger");
    e.target.classList.add("opacity-100", "text-danger");
    e.target.classList.remove("border-success", "text-success");
    campos["password"] = false;
  }
}

function validarZipCode(e) {
  if (isNaN(e.target.value)) {
    e.target.classList.add("border-danger");
    e.target.classList.add("opacity-100", "text-danger");
    campos["zipCode"] = false;
  } else {
    if (e.target.value.length < 5 || e.target.value.length > 5) {
      e.target.classList.add("border-danger");
      e.target.classList.add("opacity-100", "text-danger");
      campos["zipCode"] = false;
    } else if (e.target.value.length === 5) {
      e.target.classList.add("border-success", "text-success");
      e.target.classList.remove("opacity-100", "text-danger", "border-danger");
      campos["zipCode"] = true;
    }
  }
}

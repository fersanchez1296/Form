const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const invalid = document.querySelector(".invalid");

//Agregar los objetos para direccion, ciudad y estado
const campos = {
  fullName: false,
  email: false,
  password: false,
  zipCode: false,
  state: false,
  city: false,
};

const validarFormulario = (e) => {
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
    case "address":
      validarAddress(e);
      break;
    case "city":
      validarCity(e);
      break;
    // case "state":
    //   No entra a este switch
    //   console.log("hola desde state")
    //   validarState(e);
    //   console.log(e.target);
    //   break;
    case "zipCode":
      validarZipCode(e);
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
  // No funciono esto
  // input.addEventListener("change", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //Agregar los objetos de direccion, ciudad y estado
  if (
    campos.fullName &&
    campos.email &&
    campos.password &&
    campos.address &&
    campos.zipCode &&
    campos.city
  ) {
    //Cambiar por modal
    alert("todo bien pana");
    formulario.reset();
    //Reset de objetos a false
    for(let campo in campos){
      campos[campo] = false;
    }
    //Para evitar remover clases mejor recargar la pagina
    location.reload();
  } else {
    //Cambiar por modal
    alert("todo mal pana");

    //Para las que esten vacias al momento de presionar save
    inputs.forEach((input)=>{
      if(input.value == ""){
        input.classList.add("border-danger");
        input.classList.add("opacity-100", "text-danger");
      }
    })
    
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
    } else if (e.target.value.length >= 5 && words >= 2) {
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
  console.log(e.target.value);
  /*
    Minimo 8 caracteres
    Maximo 15
    Al menos una letra mayuscula
    Al menos una letra minuscula
    Al menos un digito
    No espacios en blanco
    Al menos un caracter especial
  */
  let exprecionRegular =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,30}$/;
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

function validarCity(e) {
  if (
    e.target.value.length > 50 ||
    e.target.value == "" ||
    isNaN(e.target.value) == false
  ) {
    e.target.classList.add("border-danger");
    e.target.classList.add("opacity-100", "text-danger");
    campos["address"] = false;
  } else if (e.target.value.length > 0 && e.target.value.length <= 150) {
    e.target.classList.add("border-success", "text-success");
    e.target.classList.remove("opacity-100", "text-danger", "border-danger");
    campos["address"] = true;
  }
}

function validarAddress(e) {
  if (e.target.value.length > 150 || e.target.value == "") {
    e.target.classList.add("border-danger");
    e.target.classList.add("opacity-100", "text-danger");
    campos["city"] = false;
  } else if (e.target.value.length > 0 && e.target.value.length <= 150) {
    e.target.classList.add("border-success", "text-success");
    e.target.classList.remove("opacity-100", "text-danger", "border-danger");
    campos["city"] = true;
  }
}

// function validarState(e) {
  
//   if (e.target.value != "") {
//     console.log(e.target.value)
//     e.target.classList.add("border-danger");
//     e.target.classList.add("opacity-100", "text-danger");
//     campos["state"] = false;
//   } else {
//     e.target.classList.add("border-success", "text-success");
//     e.target.classList.remove("opacity-100", "text-danger", "border-danger");
//     campos["state"] = true;
//   }
// }

const selected = document.getElementById("state");
selected.onchange = function(){
  if (selected.value == "choose") {
    console.log(selected.value)
    selected.classList.add("border-danger");
    selected.classList.add("opacity-100", "text-danger");
    campos["state"] = false;
  } else {
    selected.classList.add("border-success", "text-success");
    selected.classList.remove("opacity-100", "text-danger", "border-danger");
    campos["state"] = true;
  }
}
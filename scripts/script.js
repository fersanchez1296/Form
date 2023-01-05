const d  = document;
const form = d.querySelector("form");
const invalid = d.querySelector('.invalid');
const zipCode = d.getElementById('zipCode');

function validations(){
  form.addEventListener("click", event => {
    event.preventDefault()
    if(zipCode.value.length != 5){
      zipCode.classList.add("border","border-danger")
      invalid.classList.add("opacity-100", "text-danger", "text-size")
    }else if(zipCode.value.length === 5){
      zipCode.classList.remove("border-danger")
      zipCode.classList.add("border-success")
      invalid.classList.remove("opacity-100")
    }
  })
}


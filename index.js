// fetch("https://api.eva.pingutil.com/email?email=test@mail7.io",)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error)) 

const txtArea = document.querySelector("#txt-area")
const btnVerificar = document.querySelector("#btn-verificar")
btnVerificar.addEventListener("click",verificar)

function verificar() {
    console.log(txtArea.value)
}

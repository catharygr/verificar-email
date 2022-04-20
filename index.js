const mensaje = document.querySelector("#mensaje")
const txtArea = document.querySelector("#txt-area")
const btnVerificar = document.querySelector("#btn-verificar")
let spamMensaje = ''
let entregarMensaje = ''
btnVerificar.addEventListener("click", verificar)

function verificar() {
    fetch(`https://api.eva.pingutil.com/email?email=${txtArea.value}`)
    .then(response => response.json())
    .then(data => {
        if(data.data.spam) {
            spamMensaje = 'ES'
        } else {
            spamMensaje = 'NO ES'
        }


        if (data.data.deliverable){
            entregarMensaje = "SE PUEDE ENTREGAR"
        } else {
            entregarMensaje = "NO SE PUEDE ENTREGAR"
        }

        
        mensaje.innerHTML = `
        El correo electrónico ${data.data.email_address} proviene de ${data.data.domain},</br> ${entregarMensaje} y ${spamMensaje} un spam
        `
    })
    // .catch(error => console.log('error', error)) 
}

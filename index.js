const mensaje = document.querySelector("#mensaje")
const txtArea = document.querySelector("#txt-area")
const btnVerificar = document.querySelector("#btn-verificar")
let spamMensaje = ''
let entregarMensaje = ''
btnVerificar.addEventListener("click", verificar)

function verificar() {
    fetch(`https://api.eva.pingutil.com/email?email=${txtArea.value}`)
    .then(res => {
        if( res.ok){
            mensaje.innerHTML = 'Ha ocurrido un error, inténtelo más tarde'
            throw new Error('Ha ocurrido un error')
        } return res.json()
    })
    .then(data => {

        data.data.spam ? spamMensaje = 'ES' : spamMensaje = 'NO ES'
        data.data.deliverable ? entregarMensaje = "SE PUEDE ENTREGAR" : entregarMensaje = "NO SE PUEDE ENTREGAR"

        mensaje.innerHTML = `
        El correo electrónico <strong>${data.data.email_address}</strong> proviene de <strong>${data.data.domain}</strong>,</br> <strong>${entregarMensaje}</strong> y <strong>${spamMensaje}</strong> un spam
        `
    })

    .catch(error => console.error(error))
}

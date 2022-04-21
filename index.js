const mensaje = document.querySelector("#mensaje")
const txtArea = document.querySelector("#txt-area")
const btnVerificar = document.querySelector("#btn-verificar")
let spamMensaje = ''
let entregarMensaje = ''
btnVerificar.addEventListener("click", verificar)



async function verificar() {
    try {
        const respuesta = await  fetch(`https://api.eva.pingutil.com/email?email=${txtArea.value}`)
        if (!respuesta.ok) {
            mensaje.innerHTML = 'Ha habido un error, inténtalo más tarde'
            throw new Error('Ha habido un error' )
        } 
        const data = await respuesta.json()
        data.data.spam ? spamMensaje = 'ES' : spamMensaje = 'NO ES'
        data.data.deliverable ? entregarMensaje = "SE PUEDE ENTREGAR" : entregarMensaje = "NO SE PUEDE ENTREGAR"

        mensaje.innerHTML = `
        El correo electrónico <strong>${data.data.email_address}</strong> proviene de <strong>${data.data.domain}</strong>,</br> <strong>${entregarMensaje}</strong> y <strong>${spamMensaje}</strong> un spam
        `

    } catch (fallo) {
        console.error(fallo)
    }
}
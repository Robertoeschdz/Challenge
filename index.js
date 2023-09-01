const nombre = document.getElementById('nombre')
const apellidoPaterno = document.getElementById('apellidoPaterno')
const apellidoMaterno = document.getElementById('apellidoMaterno')
const email = document.getElementById('email')
const numero = document.getElementById('numero')
const fecha = document.getElementById('fecha')
const pNombre = document.getElementById('pNombre')
const pApellidoP = document.getElementById('pApellidoP')
const pApellidoM = document.getElementById('pApellidoM')
const pEmail = document.getElementById('pEmail')
const pNumero = document.getElementById('pNumero')
const pFecha = document.getElementById('pFecha')
const tituloDatos = document.getElementById('tituloDatos')
const tituloContacto = document.getElementById('tituloContacto')
const tituloFecha = document.getElementById('tituloFecha')
const datosNombre = document.getElementById('datosNombre')
const datosApellidoP = document.getElementById('datosApellidoP')
const datosApellidoM = document.getElementById('datosApellidoM')
const datosEmail = document.getElementById('datosEmail')
const datosNumero = document.getElementById('datosNumero')
const datosFecha = document.getElementById('datosFecha')
const boton = document.getElementById('iniciar')


nombre.addEventListener("input", (e) =>{
    let value = nombre.value
    updateContent(value, 'Nombre', pNombre)
})

apellidoPaterno.addEventListener("input", (e) =>{    
    let value = apellidoPaterno.value
    updateContent(value, 'Apellido Paterno', pApellidoP)
})

apellidoMaterno.addEventListener("input", (e) =>{    
    let value = apellidoMaterno.value
    updateContent(value, 'Apellido Materno', pApellidoM)
})

email.addEventListener("input", (e) =>{    
    let value = email.value
    updateContent(value, 'Email', pEmail)
})

numero.addEventListener("input", (e) =>{    
    let value = numero.value
    updateContent(value, 'Numero', pNumero)
})

fecha.addEventListener("input", (e) =>{
    let value = fecha.value
    updateContent(value, 'Fecha de Nacimiento', pFecha)
})

boton.addEventListener("click", (e) =>{
    e.preventDefault()
    iniciar()
})

document.addEventListener("DOMContentLoaded", () => {
    const datosAlmacenado = JSON.parse(localStorage.getItem('datos'));
    if (datosAlmacenado == '' || datosAlmacenado == null){

    }else{
        tituloDatos.innerText = 'Nombre:'
        datosNombre.innerHTML = `Nombre: ${datosAlmacenado.nombre}`
        datosApellidoP.innerHTML = `Apellido Paterno: ${datosAlmacenado.apellidoPaterno}`
        datosApellidoM.innerHTML = `Apellido Materno: ${datosAlmacenado.apellidoMaterno}`
        tituloContacto.innerText = 'Datos de Contacto:'
        datosEmail.innerHTML = `Email: ${datosAlmacenado.email}`
        datosNumero.innerHTML = `Numero: ${datosAlmacenado.numero}`
        tituloFecha.innerHTML = 'Fecha de nacimiento:'
        datosFecha.innerHTML = `Fecha de Nacimiento: ${datosAlmacenado.fechadeNacimiento}` 
    }
})

const updateContent = (value, informationType, textType) => {
    if (value == ''){
        textType.innerText = ''
    }else{
        textType.innerText = `${informationType}: ${value}`
    }
}

const iniciar = () => {
    if(nombre.value == '' || apellidoPaterno.value == '' || apellidoMaterno.value == '' || email.value == '' || numero.value == '' || fecha.value == ''){
        document.getElementById('alert').innerText = 'Por favor completa todos los datos'
        setTimeout(() =>{
            document.getElementById('alert').innerText = ''
        }, 1000)
    }else{
        let datos = {nombre: nombre.value, apellidoPaterno: apellidoPaterno.value, apellidoMaterno: apellidoMaterno.value, email: email.value, numero: numero.value, fechadeNacimiento: fecha.value}
        localStorage.setItem('datos', JSON.stringify(datos));
        tituloDatos.innerText = 'Nombre:'
        datosNombre.innerHTML = `Nombre: ${nombre.value}`
        datosApellidoP.innerHTML = `Apellido Paterno: ${apellidoPaterno.value}`
        datosApellidoM.innerHTML = `Apellido Materno: ${apellidoMaterno.value}`
        tituloContacto.innerText = 'Datos de Contacto:'
        datosEmail.innerHTML = `Email: ${email.value}`
        datosNumero.innerHTML = `Numero: ${numero.value}`
        tituloFecha.innerHTML = 'Fecha de nacimiento:'
        datosFecha.innerHTML = `Fecha de Nacimiento: ${fecha.value}`
        sendData(datos)
    }
}

const sendData = (data) => {
    console.log(JSON.stringify(data))
    fetch('https://testrbackend20230831221645.azurewebsites.net/api/User_RobertoEscobar',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    })
    .then(response => response.json()) 
    .catch(err => console.log(err))
}
let nombre,apellido,usuario,email,adress,country

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e) =>{ 
    e.preventDefault()

    LeerData()
})

function LeerData(){
     nombre = document.getElementById('firtsName').value
     apellido = document.getElementById('lastName').value
     usuario = document.getElementById('username').value
     email = document.getElementById('email').value
     adress = document.getElementById('adress').value
     country = document.getElementById('country').value

     GuardarLocarStorage(nombre,apellido,usuario,email,adress,country)
}

function GuardarLocarStorage(nombre,apellido,usuario,email,adress,country){
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Usuario', usuario)
    localStorage.setItem('Email',email)
    localStorage.setItem('Adress', adress)
    localStorage.setItem('Country',country)
}

function ExtraerLocarStorage(){
    let nom = localStorage.getItem('Nombre')
    alert('Bienvenido')
    let nom =localStorage.getItem('Apellido')
    let nom = localStorage.getItem('Usuario')
    let nom = localStorage.getItem('Email')
    let nom = localStorage.getItem('Adress')
    let nom = localStorage.getItem('Country')

}
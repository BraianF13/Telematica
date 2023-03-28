console.log("Hola Mundo")

// Variables
// Var : variables globales
// var numInt = 2
// var numFloat = 2.736
// var nombre = 'Braian'
// var enable = false
// var nombres = ['johan', 'nicolas','marcos']

// console.log("Imprimiendo Datos")
// console.log("numInt: " + numInt)
// console.log("numFloat: " + numFloat.toFixed(2))
// console.log("nombre: " + nombre)
// console.log("enable: " + enable)


// Declarar FUnciones
// function Imprimir(name){
//     let mensaje ="Hola "

//     return mensaje+name
// }

// console.log("Mensaje: ",Imprimir  ("Braian"))

// const Imprimir = (name)=>{
//     let mensaje ="Hola "
//     console.log("Mensaje: ",mensaje+name)

// }
// Imprimir("Braian")


const btnLogin = document.getElementById('login')
const txtUser = document.getElementById('user')

// console.log(btnLogin)

btnLogin.onclick = ()=>{
    console.log(txtUser.value)
}


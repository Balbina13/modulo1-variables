//Ejercicio 1:
//a- declarar variables con datos de usuario (user, age, email)
const user = "Rosa Montero"
let age = Number(31)
const email =  "terrorhouse@gmail.com"

//b- mostrar estos datos en la consola
console.log(user)
console.log(age)
console.log(email)

//c- mostrar el tipo de dato de cada variable por consola
console.log(typeof user)
console.log(typeof age)
console.log(typeof email)

//Ejercicio 2:
//a- pedir al usuario sus datos personales (nombre, edad, pais, profesion)
const username = prompt("Ingrese su nombre:")
age = Number(prompt("Ingrese su edad:"))
const country = prompt("Ingrese su pais:")
const profession = prompt("Ingrese su profesion:")
console.log(username)
//b- mostrar esos datos por la consola usando concatenacion
console.log( username + " " + age + " " + country + " " + profession)

//c- mostrar en consola la edad + 10
console.log(age + 10)




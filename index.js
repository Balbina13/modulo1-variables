//Ejercicio 1:
//a- declarar variables con datos de usuario (user, age, email)
const user = "Rosa Montero"
let rosaage = Number(31)
const email =  "terrorhouse@gmail.com"

//b- mostrar estos datos en la consola
console.log(user)
console.log(rosaage)
console.log(email)

//c- mostrar el tipo de dato de cada variable por consola
console.log(typeof user)
console.log(typeof rosaage)
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

//Ejercicio 3:
//a- tomar las variables del ejercicio 1 y mostrar un texto por consola, por el documento y por un alert (de a 1 por vez) con template literals
//const user = "Rosa Montero"
//let age = Number(31)
//const email =  "terrorhouse@gmail.com"
console.log(`${user} ${rosaage} ${email}`)
document.write("Rosa Montero 31 terrorhouse@gmail.com")
alert("Rosa Montero 31 terrorhouse@gmail.com")

//Ejercicio 4:
//Pedir al usuario 2 numeros y mostrar por documento el resultado de cada calculo aritmetico
const numero1 = Number(prompt("Ingrese el primer numero:"))
const numero2 = Number(prompt("Ingrese el segundo numero:"))
const resultado1 = (numero1 + numero2)
const resultado2 = (numero1 - numero2)
const resultado3 = (numero1 * numero2)
const resultado4 = (numero1 / numero2)
const resultado5 = (numero1 % numero2)

document.write("El resultado de la suma es:", ` ${resultado1}`)
document.write("El resultado de la resta es:", ` ${resultado2}`)
document.write("El resultado del producto es:", ` ${resultado3}`)
document.write("El resultado de la division es:", ` ${resultado4}`)
document.write("El resultado del resto es:", ` ${resultado5}`)

//BONUS
//Al ejercicio 4, sumar otro valor. Mostrar en consola los calculos. Analizar. Comentar resultado esperado previa resolucion.
//numeros: 124 - 32 - 20.
const numero3 = Number(prompt("Ingrese el tercer numero:"))
const resultado6 = (numero1 + numero2 + numero3)//176
const resultado7 = (numero1 - numero2 - numero3)//72
const resultado8 = (numero1 * numero2 * numero3)//79360
const resultado9 = (numero1 / numero2 / numero3)//0.19375
const resultado10 = (numero1 % numero2 % numero3)//no se (8 dice)

console.log(resultado6)
console.log(resultado7)
console.log(resultado8)
console.log(resultado9)
console.log(resultado10)



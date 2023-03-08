// JS RECAP
// keyword moderne per definire una variabile sono 2:
// - let <-- che definisce una variabile il cui valore può cambiare nel tempo
let n1 = 10
// valori primitivi possibili: stringhe, numeri, booleani, undefined, null, Symbol
let n2 = true
let n3 = 'Stefano'

n1 = 50

// - const <-- che definisce una costante, ovvero una variabile il cui valore
// non potrà venire riassegnato dopo la dichiarazione iniziale

const size = 100

const area = size * size
console.log('VALORE DI AREA', area)

let variable
console.log('VALORE DI VARIABLE', variable)
let nullVariable = null
console.log('VALORE DI NULLVARIABLE', nullVariable)

// JS È UN LINGUAGGIO DEBOLMENTE TIPIZZATO (WEAKLY TYPED)
variable = 100
variable = 'Stefano'
variable = null

let num1 = 50
let num2 = '50'

console.log(num1 + num2)
// 100

let greet = 'Buongiorno, '
let myName = 'Stefano'

console.log(greet + myName)

// JS possiede anche delle STRUTTURE DATI

// 1) ARRAY
let array1 = [1, 2, 3, 4, 5]
let array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// let array3 = [1, 'a', 2, 'b'] <-- si può fare in JS, ma è inutile/sconsigliato

console.log('lettera d', array2[3])
console.log('lunghezza array 1', array1.length)
console.log('lunghezza array 2', array2.length)

console.log('ultimo elemento di array1', array1[array1.length - 1])
console.log('ultimo elemento di array2', array2[array2.length - 1])

// 2) OBJECT
let obj1 = {
  // un oggetto è composto da coppie chiave: valore
  firstName: 'Stefano', // <-- ATTRIBUTI, PROPRIETÀ
  lastName: 'Casasola',
  age: 35,
  nationality: 'Italian',
  greets: function () {
    // METODO
    console.log('Hello!')
  },
  'zip-code': 12345,
}

console.log(obj1.age) // <-- tira fuori il valore della proprietà age, 35
console.log(obj1.nationality)
obj1.greets()
console.log(obj1['zip-code']) // quando il nome della proprietà ha caratteri non
// ammessi, potete comunque leggerne/scriverne il valore utilizzando la
// square-brackets notation
console.log(obj1['lastName']) // funziona anche per chiavi senza caratteri strani

obj1.gender = 'male'
console.log('OBJ1', obj1)
obj1.age = 36

// esempio di algoritmo per calcolare il costo totale di un acquisto su Amazon
let cartPrice = 40
// amazon sa che deve offrire la spedizione gratuita su tutti gli ordini che
// hanno almeno 50 in totale
let shippingCost
if (cartPrice > 50) {
  // amazon ci offre la spedizione gratis
  shippingCost = 0
} else {
  // amazon ci farà pagare la spedizione 5
  shippingCost = 5
}

let totalCost = cartPrice + shippingCost

console.log('CARTPRICE È ', cartPrice)
console.log('IL COSTO TOTALE È ', totalCost)

// let ecommerceName
// if(5 > 3) {
//     ecommerceName = 'Amazon'
// } else {
//     ecommerceName = 'Ebay'
// }

// TERNARY OPERATOR
let ecommerceName = 5 > 3 ? 'Amazon' : 'Ebay'

// CICLI
// un ciclo è una direttiva che vi permette di eseguire un'operazione diverse volte
// for, while, do...while

// scriviamo un array di 5 valori
let myArray = [60, 43, 5, 8, 10]

// FOR
// un ciclo for ha bisogno di un punto di inizio, di un punto di fine e quanto
// velocemente vogliamo raggiungere il punto di fine
for (let i = 0; i < 5; i++) {
  // questa cosa verrà eseguita 5 volte
  console.log('Bau!', i)
  console.log(myArray[i])
}

// WHILE
// questo random number sceglierà un valore random tra 5 e 15
let randomNumber = Math.ceil(Math.random() * 10) + 4
// console.log(randomNumber)

while (randomNumber < 13) {
  console.log('valore randomNumber: ', randomNumber)
  randomNumber = Math.ceil(Math.random() * 10) + 4
}

// FUNCTIONS
// una funzione è un blocco riutilizzabile di codice

const hello = function () {
  console.log('hello')
}

hello()
hello()
hello()

// DEFINIZIONE DI FUNZIONE
const calculateArea = function () {
  let l1 = 25
  let l2 = 15
  let sum = l1 * l2
  //   console.log("RISULTATO DELL'AREA", sum)
  // assegno il valore di ritorno di questa funzione
  return sum
}

// INVOCAZIONE DI FUNZIONE
calculateArea() // 375

console.log(calculateArea() + 25)

const canDrive = function () {
  let birthday = 16
  if (birthday >= 18) {
    return true
  } else {
    return false
  }
}

if (canDrive()) {
  // canDrive() è true o false
  console.log('Posso fare la patente!')
} else {
  console.log('Non posso ancora fare la patente :(')
}

// il valore di ritorno di una funzione vi permette di trattare
// l'esecuzione della funzione () come il valore che torna

const greetStudent = function () {
  return 'hello student'
}

console.log(greetStudent().toUpperCase())

// funzione tradizionale
const func1 = function () {
  console.log('ciao')
  console.log(this)
}

const func2 = () => {
  console.log('ciao')
  console.log(this)
}

func1()
func2()

const obj2 = {
  firstName: 'Vincenzo',
  saluta: function () {
    console.log('ciao, il mio nome è ', this.firstName)
  },
}

obj2.saluta()

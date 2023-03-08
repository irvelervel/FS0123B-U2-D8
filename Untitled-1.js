let pets = ['cat', 'dog', 'hamster', 'rabbit']

let value = pets.forEach((pet) => {
  // pet rappresenta sempre l'elemento corrente dell'array
  // forEach si occuperà di prendere [0] al primo ciclo, [1] al secondo e così via...
  console.log(pet)
})

console.log(value)

let mappedArray = pets.map((pet) => {
  return pet.toUpperCase()
})
console.log('mapped array', mappedArray)

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

let trims = []

// cars.forEach((car) => {
//   trims.push(car.trims[0])
// })

for (let i = 0; i < cars.length; i++) {
  trims.push(cars[i].trims[0])
}

console.log(trims)

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = []
// inserisci la tua funzione qui

for (let i = 0; i < cars.length; i++) {
  justFirstTrims.push(cars[i].trims[0])
}

// stessa cosa con forEach
cars.forEach((car) => {
  justFirstTrims.push(car.trims[0])
})

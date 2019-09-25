function vols () {

var flights = [
  { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
]

// primera part: benvinguda
var nom = 'Rafel'//prompt('Cómo te llamas?') // aquí he de posar un prompt que demani el nom

// segona part: llistat de vols
console.log('Hola ' + nom + ', estos son los vuelos programados para hoy:' + '\n')
for (var i = 0; i < flights.length; i++) {
  console.log('El vuelo numero: '+ flights[i].id + ' con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + ' euros ')
  // no sé com concatenar aquestes dues frases
if (flights[i].scale == true) {console.log('y realiza una escala' + '\n')} else {console.log('y no realiza ninguna escala' + '\n')};
}

// tercera part: cost mig
var total = 0, i;
    for (i = 0; i < flights.length; i ++) {
        total += flights[i].cost;
    }
    console.log('El coste medio de los vuelos es: ' + parseFloat(total / flights.length).toFixed(2) + ' euros.' + '\n')

// quarta part: vols amb escala
var escala =[]
for (i = 0; i < flights.length; i ++) {
if (flights[i].scale == true) { escala.push(flights[i].scale)};
}
console.log("Hay programados " + escala.length + " vuelos con escala" + '\n')

// cinquena part: últims cins vols
console.log ('Los últimos 5 vuelos de hoy son:' + '\n')
for (i = flights.length - 5; i < flights.length; i++) {
  console.log ('El vuelo numero: '+ flights[i].id + ' con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + '\n')
}
}

//creem objecte pel tipus d'usuari
var kindOf = [
  { id: 0, type: 'USER' },
  { id: 1, type: 'ADMIN'},
  ];

var usuari = 'USER'




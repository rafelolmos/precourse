var bombo = []
var carton = []
var randomBall
var name = 'rafel' // prompt('What's your name?')
var singLine = false

// funció per generar un array d'un numero min fins a un max que ens permet generar el numero de boles que es juguen
function numSerie(min, max) {
  for (var i = min; i < (max + 1); i++) {
    bombo.push(i)
  };
};

// funció per generar numeros enters entre dos nombres, els dos inclosos
function getRandomIntNumber() {
  return Math.floor(Math.random() * bombo.length)
};

// afegeix en un array 5 nombres que generaran el cartró, faltaria evitar que surtin repetits
function card() {
  for (var i = 0; i < 5; i++) {
    if(carton.includes(randomBall)){
      exist = true} 
    else {
      carton.push(getRandomIntNumber(1, 5))
  };
};
}


// treure un número aleatori swl bombo, mostra-lo i eliminar-lo
function getRandomBall() {
  var n = bombo.splice(Math.floor(Math.random() * bombo.length), 1);
  randomBall = Number(n)
}

// funció per convertir en X la bola que hem tret

function line(x) {
  return x === 'X';
};

function ballIncluded() {
  if (carton.includes(randomBall)) {
    carton[carton.indexOf(randomBall)] = 'X';
    console.log('ball ' + randomBall + ' is included');
    console.log('your carton: ' + carton);
  } else {
    console.log('ball ' + randomBall + ' is not included');
    console.log('your carton: ' + carton);
  }

  if (carton.every(line) && singLine === false) {
    console.log('line');
    singLine = true
  };
};

// comença el joc

function bingo() {

  // genera bombo
  numSerie(1, 5)

  // genera cartró
  card()
  carton

  for (var i = 0; i = bombo.length; i++) {
    getRandomBall();
    ballIncluded();
  };
}
// em falta aturar quan s'aconsegueix línia
bingo()

while (carton.length <= 5){
      if(carton.includes(randomBall)){
      exist = true} 
    else {
      carton.push(getRandomIntNumber(1, 5))
}
}


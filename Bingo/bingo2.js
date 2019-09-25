var bombo = []
var ballsPlaying = []
var carton = []
var randomBall
var name
var singLine = false


function yourName(){
  name = prompt("what's your name?")
}

// funció per generar un array d'un numero min fins a un max que ens permet generar el numero de boles que es juguen
function numSerie(min, max) {
  for (var i = min; i < (max + 1); i++) {
    bombo.push(i);
    ballsPlaying.push(i)
  };
};

// funció per generar numeros enters entre dos nombres, els dos inclosos
function getRandomIntNumber() {
  return Math.floor(Math.random() * bombo.length)
};

// funció per generar numeros enters entre dos nombres, els dos inclosos
function getRandomCarton() {
  return Math.floor(Math.random() * ballsPlaying.length)
};

// afegeix en un array 5 nombres que generaran el cartró, faltaria evitar que surtin repetits
function card() {
  for (var i = 0; i < 5; i++) {
    var m = getRandomCarton();
    var p = Number(m);
    carton.push(ballsPlaying[p]);
    ballsPlaying.splice(p,1);
  };
};

// treure un número aleatori del bombo, mostra-lo i eliminar-lo
function getRandomBall() {
  var n = bombo.splice(Math.floor(Math.random() * bombo.length), 1);
  randomBall = Number(n);

};

// funció per convertir en X la bola que hem tret

function line(x) {
  return x === 'X';
}

function ballIncluded() {
  if (carton.includes(randomBall)) {
    carton[carton.indexOf(randomBall)] = 'X';
    console.log('ball ' + randomBall + ' is included');
    console.log('your carton: ' + carton);
  } else {
    console.log('ball ' + randomBall + ' is not included');
    console.log('your carton: ' + carton);
  };

  if (carton.every(line) && singLine === false) {
    console.log('line');
    //alert('line!!!')
    singLine = true
  };
};

// comença el joc

function bingo() {
  //demana nom d'usuari
  //yourName()
  
  // genera bombo i boles que es juguen
  numSerie(1, 10)

  // genera cartró
  card()

  for (var i = 0; i = bombo.length; i++) {
    getRandomBall();
    ballIncluded();
    //alert('Number:' + randomBall);
    //confirm('Do you want to continuos?')
  };
}

bingo()





















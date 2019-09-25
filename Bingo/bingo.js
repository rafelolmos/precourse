var bingo1 = [];
var serieNum = [];

// funció per generar un array d'un numero min fins a un max

function numSerie (min, max) {
  for (var i = min; i < (max +1); i++){
  serieNum.push(i)
  };
  console.log('numSerie -->' + serieNum)
};

// funció per generar numeros enters entre dos nombres, els dos inclosos
function getRandomIntNumber() {
  return Math.floor(Math.random() * serieNum.length)
};

// afegeix en un array 5 nombres
function card(){
for (var i = 0; i < 5; i++) {
bingo1.push(getRandomIntNumber (1,5))};
};

console.log(bingo1)

//treure una bola a l'atzar
var randomBall = getRandomIntNumber(1,10)

 console.log(randomBall)

if (bingo1.includes(randomBall) === true) {
  bingo1[bingo1.indexOf(randomBall)] = 'X';
  console.log(bingo1);
} else {
  console.log('number ' + randomBall + ' is not included');
  console.log(bingo1)
}

numSerie(1, 5)
card()
console.log('------------')

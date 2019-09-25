//Definim funció suma

function suma (numero1, numero2){
  if (typeof numero1 === 'number' && typeof numero2 === 'number') {
    console.log('Suma: ' + parseFloat((numero1+numero2).toFixed(3)))
    }
};

//Definim funció resta
function resta (numero1, numero2){
  if (typeof numero1 === 'number' && typeof numero2 === 'number') {
    console.log('Resta: ' + parseFloat((numero1-numero2).toFixed(3)))
    }
};

//Definim funció multiplicació
function multiplicacio (numero1, numero2){
  if (typeof numero1 === 'number' && typeof numero2 === 'number') {
    console.log('Multiplicació: ' + parseFloat((numero1*numero2).toFixed(3)))
    }
};

//Definim funció divisió
function divisio (numero1, numero2){
  if (typeof numero1 === 'number' && typeof numero2 === 'number') {
    console.log('Divisió: ' + parseFloat((numero1/numero2).toFixed(3)))
    }
};

//Definim funció calc que engloba les operacions que es faran quan numero1 i numero 2 siguin 'number'

function calc(numero1, numero2){
return suma(numero1,numero2), resta (numero1,numero2), multiplicacio(numero1, numero2), divisio (numero1, numero2)
};

//Definim funció amb les possibilitats de càlcul
function calcul(numero1, numero2) {

var result =[];

if (typeof numero1 !== 'number' && typeof numero2 !== 'number'){ return 'No són un nombre'}
else if (typeof numero1 != 'number') {
  return result = ['Arrel = ' + parseFloat(Math.sqrt(numero2).toFixed(3))];
} else if (typeof numero2 != 'number'){
  return result = ['Arrel = ' + parseFloat(Math.sqrt(numero1).toFixed(3))]
} else return calc(numero1, numero2)
}

calcul(45, 40)
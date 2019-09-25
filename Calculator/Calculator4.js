
var numero1 = 4
var numero2 = 5


function suma (){
  if (typeof numero1 === 'number' && typeof numero2 === 'number') {
    console.log(parseFloat((numero1+numero2).toFixed(3)))
    }
};

function resta (){
  if (typeof numero1 === 'number' && typeof numero2 === 'number') {
    console.log(parseFloat((numero1-numero2).toFixed(3)))
    }
};

function multiplicacio (){
  if (typeof numero1 === 'number' && typeof numero2 === 'number') {
    console.log(parseFloat((numero1*numero2).toFixed(3)))
    }
};

function divisio (){
  if (typeof numero1 === 'number' && typeof numero2 === 'number') {
    console.log(parseFloat((numero1/numero2).toFixed(3)))
    }
}

suma()
resta()
multiplicacio()
divisio()

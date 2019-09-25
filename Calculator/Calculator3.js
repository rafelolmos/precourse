

//Declara variables
function calcul(num1, num2) {

var result =[];

if (typeof num1 != 'number' && typeof num2 != 'number'){ return 'No són un nombre'}
else if (typeof num1 == 'number' && typeof num2 == 'number') {
  return result = ['Suma = ' +                       parseFloat((num1+num2).toFixed(3)),'Resta = ' +     parseFloat((num1-num2).toFixed(3)),'Multiplicació = ' +     parseFloat((num1*num2).toFixed(3)), 'Divisió = ' + parseFloat((num1/num2).toFixed(3))]

} else if (typeof num1 != 'number') {
  return result = ['Arrel = ' + parseFloat(Math.sqrt(num2).toFixed(3))];
} else if (typeof num2 != 'number'){
  return result = ['Arrel = ' + parseFloat(Math.sqrt(num1).toFixed(3))]
};
}
calcul(67, 56)


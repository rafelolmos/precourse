//Declara variables
var num1 = 2;
var num2 = 3;
var result;

//els sumatoris en 3 decimals coma nombre
var suma = parseFloat((num1+num2).toFixed(3));
var resta = parseFloat((num1-num2).toFixed(3));
var divisio = parseFloat((num1/num2).toFixed(3));
var multi = parseFloat((num1*num2).toFixed(3));
var arrel = parseFloat((num1*num1).toFixed(3));

if (isNaN(num1) || isNaN(num2)){
  alert ("IS NOT A NUMBER")
  } else {
      if (num2 == null){
    console.log("Arrel= "+ arrel)
        }else{
    result = console.log("Suma="+suma+" Resta="+resta+" Divisió="+divisio+" Multiplicació="+multi)
    }
}

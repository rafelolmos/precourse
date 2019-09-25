
var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"}
];

console.log(questions[0].question)
var an = 'pasapalabra'
switch(an){
  case questions[0].answer : questions[0].status = 1; break
  case 'pasapalabra' : questions[0].status = 0; break
  default : questions[0].status = -1; break
}

for (var i = 0; i< questions.length; i++){
  var an
  switch(an){
  case questions[i].answer : questions[i].status = 1; break
  case 'pasapalabra' : questions[i].status = 0; break
  default : questions[i].status = -1; break
};
};

questions




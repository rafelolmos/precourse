var allAvengersFullName = [];

var allAvengersProperties = [];

function fillFullName (fullName) {return allAvengersFullName.push(fullName)}


function Avenger(id, fullName, classRoom, city, job, studies,markAv) {
    this.id = id
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
    this.listProperties = function (){
      console.log(this.id + ', ' + this.fullName + ', ' + this.classRoom + ', ' + this.city + ', ' + this.job + ', ' + this.studies + ', ' + this.markAv)
    };
    this.addAvenger = function (){
      allAvengersProperties.push(this)
    }
    this.addAvenger()
    fillFullName(this.fullName);
};

var tonyStark = new Avenger (1, "Tony Stark", "XI", "NYC", "Engineer", "MIT", 10)

var spiderman = new Avenger (2, "Spiderman", "X", "NYC", "student", "phisics", 6)

var thor = new Avenger (3, "Thor", "VII", "Denmark", "carpenter", "engineering", 8)

var superman = new Avenger (4, "Clark Ken", "II", "NYC", "journalist", "flying", 10)

var flash = new Avenger (5, "Flash", "IV", "Paris", "fireman", "mathematics", 10)

var rafelolmos = new Avenger (6,'Rafel Olmos', 'VIII', 'Barcelona', 'student', 'philosopy', 8)


console.log('..............')

console.log(allAvengersFullName)

let ownProps = [];

for (let property in superman) {
  if(superman.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log('RESULT -->', allAvengersProperties)
console.log(ownProps); // prints [ "name", "numLegs" ]
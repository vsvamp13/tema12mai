//variabile
let myLet = 1;
myLet += 5;
console.log(myLet);

let x = 13;
let y = 7;
let z = x+y;
console.log(z)
// declararea intr-o singura linie a 3 variabile
let a = 13, b = 7, c = a+b;
console.log(a, b, c);
//operatori
//assignment operator (=)
let d = 3;
//addition operator (+) adunarea
let e = 2 + 4;
console.log(e);
//Subtraction operator (-)
let ex = 10 - 5;
console.log(ex);
//multiplication operator (*) inmultirea
let f = 3 * 3;
console.log(f);
//Exponentiation operator (**) ridicarea la putere
let g = 5;
g **= 3;
console.log(g);
// Division operator (/)
let h = 9;
h /= 3;
console.log(h);
//Modulus (Division Remainder) operator (%)
let j = 7;
j %= 5;
console.log(j);
//Tipuri de date in JS
//avem date de tip numar
let height = 170;
//avem date de tip string
let pounds = '65';
//si avem date de tip object
function myName () {
    alert("Hey man");
}
myName()
//tipuri de ferestre care se afiseaza utilizatorului
//fereastra alert, deja a fost definita mai sus
//fereastra cu text codat atob
function myFunction() {
    let str = "Hello World!";
    let enc = window.btoa(str);
    let dec = window.atob(enc);
  
    let res = "Encoded String: " + enc + "<br>" + "Decoded String: " + dec;
    document.getElementById("demo").innerHTML = res;
  }

  //feseastra blur
  function myFunctionTwo() {
  let myWindow = window.open("", "", "width=400, height=200");
myWindow.document.write("<p>Heloo dude</p>");
myWindow.blur(); 
  }

  function myFunctionThree() {
    let person = prompt("Please enter your nickname");
    if (person != null) {
      document.getElementById("test").innerHTML =
      "Noroc " + person + "! Tot normal?";
    }
  }
// Count to 10
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}

// text.length
function my_Function() {
    let text = "Hello World!";
    let length = text.length;
    document.getElementById("demo").innerHTML = length;
}


// Instruments for_loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"; 
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// arrays
function array_Function() {
    var car_Works = [];
    car_Works[0] = "Transmission"; // object + properties
    car_Works[1] = "Suspension";
    car_Works[2] = "Engine";
    car_Works[3] = "Cooling";
    document.getElementById("Array").innerHTML = "All works with " + car_Works[3] + " system.";
}


// Const
function constant_Function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instrument.color = "Red";
    Musical_Instrument.price = "1000£";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.write(X);
{
    let X = 33; // let keyword can block scope
    document.write("<br>" + X);
}

document.write("<br>" + X);

var X = 82;
document.write("<br>"+ X);
{
    var X = 33; // Var keyword cannot have block scope
    document.write("<br>" + X);
}

document.write("<br>" + X);

// return Function       
let x = myFunction(4, 3); 
document.getElementById("demos").innerHTML = x;

function myFunction(a, b) {
  return a * b;   
} 


//  Crt object with propert. and a method.
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();


// break statement
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 7) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("br_Statement").innerHTML = text;

//cont statement
let numb = "";
for (let i = 0; i < 15; i++) {
    if (i === 9) { continue; }
    numb += "The number is" + i + "<br>";
}
document.getElementById("cont_Statement").innerHTML = numb;

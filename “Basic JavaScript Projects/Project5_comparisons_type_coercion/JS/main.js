document.write(typeof "Hello"); // typeof operator
document.write(typeof 6); //  typof operator 

function my_Function() { // definding function and naming it
    document.getElementById("Test").innerHTML = isNaN("This is String");//True
}

function my_Nanfunction() { //definding function and naming it
    document.getElementById("NaN").innerHTML = 0/0; // Puting the value of result into HTML NAN

}

function my_Numfunction() { //definding function and naming it
    document.getElementById("Number").innerHTML = isNaN("007"); // Puting the value of result into HTML False (007 is a number)
}


function my_Infinity() { // definding function and naming it
    document.getElementById("Infin").innerHTML = 2E310; //Puting the value of result into HTML Infinity
}

function negative_number() { //definding function and naming it
    document.getElementById("NM").innerHTML = -3E310; // Puting the value of result into HTML -infinity
}

function not_Function() { //deffinding function and naming it
    document.getElementById("Not").innerHTML = !(5 > 10); // Puting the value of result into HTML true
}

function dot_Function(){ //deffinding function and naming it
    document.getElementById("NotT").innerHTML = !(30 > 10); // Putinf the value of result into HTML False
}

document.write(10 > 2); //greater than (true)

document.write(10 < 2);// less than (false)

console.log(2 + 2); //console.log() method

document.write("10" + 54); // type coercion

console.log(10 < 2); //false

document.write(10 == 10); // double equal signs true

document.write(3 == 11); // double equal signs false

X = 10; // variable X
Y = 10; //variable Y
document.write(X === Y); // triple equal sign true

x = 6; // variable x
Y = "10"; // string value
document.write(X === Y); //triple equal sign false

X = 12; // variable X
Y = "12"; // string value
document.write(X === Y); //triple equal sign false

A = 20; // variable A
B = 10;  // variable B
document.write(A === B); // triple qual sign false

document.write(5 > 2 && 10 > 4); // (&& and operator) boolean true

document.write(5 > 10 && 10 > 4); //false

document.write(5 > 10 || 10 > 4); // || or operator true 

document.write(5 > 10 || 10 > 20); // || or operator false
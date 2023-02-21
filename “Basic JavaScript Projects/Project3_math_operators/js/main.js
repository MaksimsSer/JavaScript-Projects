function addition_Function() {  //Definding a function and naming it
    var addition = 3 + 3;   // variable addition
    document.getElementById("Addition").innerHTML = `3 + 3 = ${addition}`; //Putting the value of result into HTML addition
}

function subtraction_Function() { // Definding a function and naming it
    var Subtraction = 5-2; // variable subtraction
    document.getElementById("Subtr").innerHTML = `5-2=${Subtraction}`;// Putting the value of result into HTML subtraction    
}

function multiplication_Function() {//Definding a function and naming it
    var multiplication = 6 * 9; //variable multiplication 
    document.getElementById("DDD").innerHTML = `6 * 9 =${multiplication}`;  //Putting the value of result into HTML multiplicatiom
}

function division_Function() { // Definding a function and naming it
    var division = 12 / 3; //variable division
    document.getElementById("Division").innerHTML = `12 / 3 =${division}`; // Putting the value of result into HTML division
}

function mixed_Math() { // definding a function and naming it 
    var mixed = (1 + 2) * 10 / 2 -5 ; // variable of multiple operations
    document.getElementById("Mixed").innerHTML = `1 plus 2, multiplied by 10,divided in half and then subtracted by 5 equals${mixed}`;
}

function modulus_Opertor() { // Definding a function and naming iit
    var modulus= 25 % 6; // Variable modulus
    document.getElementById("Modul").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus; //Putting the value of result into HTML modulus
}

function negation_Operator() { // Definding a function and naming it
    var x= 10; //variable x
    document.getElementById("Unary").innerHTML = -x; // Putting the value of result into HTML negation form 
}

window.alert(Math.random()); // return random number betweeen 0 and 1

window.alert(Math.random() * 100); // return random number between 0 and 100
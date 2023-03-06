function full_Sentence() { //def. function and naming it
    var part_1 = "I have "; // variable
    var part_2 = "made this "; //vriable
    var part_3 = "into complete ";//variable
    var part_4 = "sentence!";//variable
    var whoole_sentence = part_1.concat(part_2, part_3, part_4); //concatenate method(connect 4 strings)
    document.getElementById("Concatenate").innerHTML = whoole_sentence; ////putting the value of result into HTML
}

function slice_Method() { //def. function and naming it
    var Sentence = "All work and no play makes Johnny a dull boy."; // variable
    var Section = Sentence.slice(27, 33); //Slice method (numbers indecate char. string will be cut out and displayed)
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Method() { // def. function and naming it
    var car = "Rolls Royce Boat Tail."; // variable
    var car = car.toUpperCase(); // UpperCase method
    document.getElementById("Ucase").innerHTML = car; //putting the value of result into HTML
}
   
function my_Function() { // def. function and naming it 
    var text = "The most expensive wristwatch is said to be worth $55 million and is called The Hallucination."; //variable
    var text = text.search("Hallucination"); // Search method
    document.getElementById("my_Serch").innerHTML = text;  // putting the value of result into HTML
}   
function string_Method() { //def. function and naming it
    var X = 12; // variable
    document.getElementById("Numbers_to_String").innerHTML = X.toString(); //putting the value of result into HTML (string methhod/returns a number to string)
}
 
function precision_Method() { // def. function and naming it
    var X = 12938.30129873776112; //variable 
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //putting the value of result into HTML (toPrecision formats a number to a specified length ) 
}

function fix_Method() { //def. function and naming it
    var X = 4.82594; // variable
    document.getElementById("Tfix").innerHTML = X.toFixed(); //putting the value of result into HTML(toFixed convert numner to string /rounds string to a specified decimals)
}

function val_Method() { // def. function and naming it
    var text = "Mathematics has proven that giraffes can swim"; // var text
    var text = text.valueOf(); // value of
    document.getElementById("Demo").innerHTML = text;// putting thr value of result into html
}
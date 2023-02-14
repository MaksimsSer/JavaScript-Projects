alert("Hello World!"); // alert method
window.alert("Hello, World"); //window alert method
document.write("Hello, world!"); //document write method

var A = "Project!"; // variable A
var B = "Maksims,Production!"; // variable B
window.alert(A+B); //concatenated 2 string variables

document.write("Lisa told Bart, \"\\Knock it Off, Bart! Or I'll tell dad!\"<br>\"Eat My shorts!\"Bart responded.");//escaping

document.write ("\"Be who you are and say what you feel,"+"because those who mind don\'t matter and those who matter don\'t mind.\""+" Dr.Seuss");//Concatenating a String

var Family = "The Arezzinis", Dad="Jeremiah", Mom="Hermione",Daughter="Penny", Son="Zorro"; //multiplie variables
document.write(Son); //document write method

var blues = "I have the blues"; // variable string called blues
var blues = blues.fontcolor("blue"); //str.fontcolor method
document.write(blues); //document write method

document.write(3 + 3); // statement containing an expression (3 + 3).

function My_First_Function() {  //Definding a function and naming it
    var str="This Text is blue!"; //Definding a variable and giving it a //string value
    var result=str.fontcolor("blue"); //Using the fontcolor method on //str variable
    document.getElementById("Blue_Text").innerHTML=result; //Putting the value//of result into HTML with "Blue_text" id
}

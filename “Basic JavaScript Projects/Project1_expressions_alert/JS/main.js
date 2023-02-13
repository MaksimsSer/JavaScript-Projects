alert("Hello World!");
window.alert("Hello, World");
document.write("Hello, world!");

var A = "This is a string!";
document.write(A);

var B = "Maksims,Production!";
window.alert(B);

document.write("Lisa told Bart, \"\\Knock it Off, Bart! Or I'll tell dad!\"<br>\"Eat My shorts!\"Bart responded.");

document.write (`\"Be who you are and say what you feel,because those who mind don\'t matter and those who matter don\'t mind.\" Dr.Seuss`);

var B = "\"Be who you are and say what you feel,because those who mind don\'t matter" + "Lisa told Bart, \"\\Knock it Off, Bart!"
document.write(B)

var Family = "The Arezzinis", Dad="Jeremiah", Mom="Hermione",Daughter="Penny", Son="Zorro";
document.write(Son);

var blues = "I have the blues";
var blues = blues.fontcolor("blue");
document.write(blues);

Document.write(3 + 3);

function My_First_Function() {  //Definding a function and naming it
    var str="This Text is blue!"; //Definding a variable and giving it a //string value
    var result=str.fontcolor("blue"); //Using the fontcolor method on //str variable
    document.getElementById("Blue_Text").innerHTML=result; //Putting the value//of result into HTML with "Blue_text" id
}

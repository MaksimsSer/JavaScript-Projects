
function My_Function() {  //Definding a function and naming it
    var str="Hello,Hello!!!"; //Definding a variable and giving it a //string value
    var result=str.fontcolor("red"); //Using the fontcolor method on //str variable
    document.getElementById("Hello").innerHTML=result; //Putting the value//of result into HTML with "Hello" id
}

function myFunction() { // Definding a function and naming it
    var sentence = "I am learning "; //Definding a variable 
    sentence += "a lot from this book!"; // operator to concatenate a string
    document.getElementById("Concatenate").innerHTML = sentence; // Putting the value//of result into HTML with "Concatenate" id
}

var X = 10; // global variable 
function Add_numbers_1() { 
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Numners_1() {
    var X = 100; // local variable
document.write(20 + X + "<br>");
}
Numners_1();


function Add_numbers_5() {
    var X = 10; // local variable 
    console.log(15 + X);
}
function Add_numbers_6() {
    console.log(X + 100);
}
Add_numbers_5();
Add_numbers_6();


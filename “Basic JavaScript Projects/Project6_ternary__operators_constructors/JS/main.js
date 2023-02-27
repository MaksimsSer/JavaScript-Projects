 function Ride_Function() { //definding function and naming it
    var Height, Can_ride; //variable
    Height = document.getElementById("Height").value;  
    Can_ride = (Height < 52) ? " You are too short " : " You are tall enough "; //Condition Value 1:Value 2
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; 
}

function Age_Function() {// definding function and naming it
    var Age, Vote; // variable
    Age= document.getElementById("Age").value; 
    Vote=(Age<18)? "You are not old enough to vote" : "You can Vote";  //Condition Value 1:Value 2
    document.getElementById("Vote").innerHTML= Vote + " in elections"; //Puting the value of result into HTML 
}

class Vehicle {
    constructor(Make, Model, Year, Color) { //constructor
        this.Vehicle_Make = Make; // this
        this.Vehicle_Model = Model; //this
        this.Vehicle_Year = Year; //this
        this.Vehicle_Color = Color; //this 
    }
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // var new
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //var new
var Erik = new Vehicle("Ford", "Kuga", 2015, "Red"); //var new
function myFunction(){ //definding function and naming it
    document.getElementById("Keywords_and_Constructors").innerHTML = 
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year; //putting the value of result into HTML
}

function My_Function() { // Definding function and naming it
}

class Phone {
    constructor(Make, Model, Year, Color) { //constructor
        this.Phone_Make = Make; //this
        this.Phone_Model = Model; //this
        this.Phone_Year = Year; //this
        this.Phone_Color = Color; //this 
    }
}
var John = new Phone("Samsung", "S20+", 2021, "White"); // var new
var Sid = new Phone("IPhone", "14 Pro", 2023, "Green"); // var new
function transient() { //deffinding function and naming it (constr. function)
    document.getElementById("Demo").innerHTML = 
        "John has a new phone " + John.Phone_Make + " Model "+John.Phone_Model + " in " + John.Phone_Color + " color " + " manufactured in " + John.Phone_Year; //putting the value of result into HTML
}






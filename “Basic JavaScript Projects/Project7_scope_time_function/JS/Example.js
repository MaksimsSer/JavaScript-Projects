function get_Date() { //definding function and naming it
    if (new Date().getHours() > 6) {
        document.getElementById("Greeting").innerHTML = "How are you toady?";
    }
}

function my_Function() { //definding function and naming it
    if (10 > 2) { // if statment 
        document.getElementById("Demo").innerHTML = "Hello,Hello =)"; //putting the value of result into HTML
    }
}

function Age_Function() { //definding function and naming it
    Age = document.getElementById("Age").value;
    if (Age >= 18) { // if statement
        Vote = "You are old enough to vote!";
    }
    else { // else statment
        Vote = "You are not enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //putting the value of result into HTML
}

function Time_function() { //definding function and naming it
    var Time = new Date().getHours(); //variable 
    var Reply; //variable
    if (Time < 12 == Time < 0) { // if statement
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) { //elsr if staatement 
        Reply = "It is afternoon.";
    }
    else { //else statement
        Reply = "It is evening time"; 
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //putting the value of result into HTML
}
function count_Function() { //definding function and naming it
    document.getElementById("Counting").innerHTML = Count(); //putting the value of result into HTML (Nested function)
    function Count() { 
        var Starting_point = 9;
        function Plus_One() { Starting_point += 1; }
        Plus_One();
        return Starting_point;
    }
}

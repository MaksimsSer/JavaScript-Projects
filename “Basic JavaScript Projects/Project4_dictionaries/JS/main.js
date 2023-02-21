function my_Dictionary() { // Definding a function and naming it
    var Subjects = {  //Variable Subjects
        ALG1:"Algebra_1", // key + value 
        ALG2:"Algebra_2", // key + value
        HIS:"History", // key + value
        PHYS1:"Physics_1", // key + value
        PE: "Physical Education", // key + value
    };
    delete Subjects.PE // deleted value
    document.getElementById("Dictionary").innerHTML = Subjects.PE; // Putting the value of result into HTML Subj/PE.
}


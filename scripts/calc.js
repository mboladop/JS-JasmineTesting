function addition(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2)  == "number" ){
        return num1 + num2;
    } else {alert("Arguments must be both numbers");}
}
function subtraction(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2)  == "number" ){
        if (num1 < num2) {
            alert("negative result!");
        }
        return num1 - num2;
    } else {alert("Arguments must be both numbers");}
    
    
}
function multiplication(num1, num2) {
    return num1 * num2;
}
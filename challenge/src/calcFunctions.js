function areaOfCircle(n) {
    if (isNaN(n)) {
        alert("Argument must be a number");
    }
    let result = 3.1416 * (n * n);
    return Number(result.toFixed(2));
}

function squareRoot(n) {
    if (n < 0) {
        alert ("there are no negative results for square roots");
    }
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
}

function squareMe(n) {
    return n * n;
   
    /*let result = n * n;
    return Number(result.toFixed(2));*/
}

function cubeMe(n){
    return n*n*n;
}

function areaOfTriangle(b, h){
    
}
function areaOfCircle(n) {
    if (isNaN(n)) {
        alert("Argument must be a number");
    }
    let result = 3.1416 * (n * n);
    return Number(result.toFixed(2));
}

function squareRoot(n) {
    if (n < 0) {
        alert("there are no negative results for square roots");
    }
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
}

function squareMe(n) {
    return n * n;

    /*let result = n * n;
    return Number(result.toFixed(2));*/
}

function cubeMe(n) {
    return n * n * n;
}

function areaOfTriangle(b, h) {
    if (b < 0 || h < 0) {
        alert("no negative values are acceptable");
    }
    return (b * h) / 2;
}

function yearCalculator(n) {
    
    if (1700 < n && n > 2018){
        alert("no numbers above 2018 and below 1700 are viable");
    }
    return 2018 - n;
}


function areaOfCylinder(r, h) {
    return ( ((2 * r)*h ) + (2 * (r * r)) ) * Math.PI ;
}

/*
function fizzBuzz(n) {
    if (n % 3 == 0) {
    return "fizz";
  }
}*/
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

function fizzBuzz(n) {
    if (isNaN(n)) {
      alert ("Insert a number Dummy!");
  } else if (n % 3 == 0 && n % 5 == 0) {
    return "Fizz Buzz";
  } else if (n % 3 == 0){
    return "Fizz";
  } else if (n % 5 == 0){
    return "Buzz";
  } else {return n;}
}

function whatCanIDrink(n){
    if (isNaN(n)) {
        alert("Sorry, i cant tell what drink because that age is incorrect, introduce a number!");
    } else if (n < 0 || n >= 130) {
        alert("Sorry, but either you haven´t been born or you are already dead, enter a number between 0 and 130!");
    } else if (n >= 0 && n < 14 ) {
        alert("Drink Toddy!");
    } else if (n >= 14 && n < 18 ) {
        alert("Drink Coke!");
    } else if (n >= 18 && n < 21 ) {
        alert("Drink Beer!");
    } else if (n >= 21 && n < 130 ) {
        alert("Drink Whisky!");
    }
}
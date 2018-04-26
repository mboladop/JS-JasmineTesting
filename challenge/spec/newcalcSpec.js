describe("Extra calculator functions", function() {
    describe("Area function", function() {
        
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        
        it ("should show an alert for NaN", function(){
             spyOn(window, "alert");
             areaOfCircle("Fish");
             expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
        
        it ("should alert that there are no negative results for square roots", function() {
             spyOn(window, "alert");
             squareRoot(-3);
             expect(window.alert).toHaveBeenCalledWith("there are no negative results for square roots");
        });
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
    });
    
    describe("Cube function", function(){
        it("should return 27 as the cube of 3", function(){
            expect(cubeMe(3)).toBe(27);
        });
    });
    
    describe("Triangle area function", function(){
        it ("should return 5 for the area of a triangle with base 5 and height 2", function(){
            expect(areaOfTriangle(5, 2)).toBe(5);
        });
        
        it ("should alert that no negative values are acceptable", function() {
            spyOn(window, "alert");
            areaOfTriangle(-5, 2);
            expect(window.alert).toHaveBeenCalledWith("no negative values are acceptable");
        });
    });
    
    describe("Year calculator function", function(){
        
        it("should calculate that fron 2016 there are 2 years left till 2018", function(){
            expect(yearCalculator(2016)).toBe(2);
        });
        
        it("should alert no numbers above 2018 and below 1700 are viable", function(){
            spyOn(window, "alert");
            yearCalculator(2019);
            expect(window.alert).toHaveBeenCalledWith("no numbers above 2018 and below 1700 are viable");
        })
    });
    
    describe("Area of a Cylinder function", function(){
       
        it("should return an area of 100.53 for a radius of 2 and a height of 6", function(){
         expect(areaOfCylinder(2, 6)).toBe(100.53096491487338);   
        });
    });

    describe("FizzBuzz game function", function(){
        it("should return fizzbuzz if the number is divisible by 3 or 5", function(){
            expect(fizzBuzz(15)).toBe("Fizz Buzz");
        });
        
        it("should return fizz if the number is divisible by 3", function(){
            expect(fizzBuzz(9)).toBe("Fizz");
        });
        
        it("should return fizzbuzz if the number is divisible by 5", function(){
            expect(fizzBuzz(10)).toBe("Buzz");
        });
        
        it("should return fizzbuzz if the number is not divisible by 3 or/ and 5", function(){
            expect(fizzBuzz(8)).toBe(8);
        });
        
        it("should alert NaN if the argument is not a number", function(){
            spyOn(window, "alert");
            fizzBuzz("goat");
            expect(window.alert).toHaveBeenCalledWith("Insert a number Dummy!");
        });
    });
    
    describe("What can i drink function", function() {
       
       it("should alert sorry i cant tell what drink because that age is incorrect, introduce a number!", function() {
           spyOn(window, "alert");
           whatCanIDrink("string");
           expect(window.alert).toHaveBeenCalledWith("Sorry, i cant tell what drink because that age is incorrect, introduce a number!");

       });

       it("should alert sorry, but either you haven´t been born or you are already dead, enter a number between 0 and 130!", function() {
           spyOn(window, "alert");
           whatCanIDrink("-3");
           expect(window.alert).toHaveBeenCalledWith("Sorry, but either you haven´t been born or you are already dead, enter a number between 0 and 130!");
       });

       it("should alert Drink Toddy!", function() {
           spyOn(window, "alert");
           whatCanIDrink("12");
           expect(window.alert).toHaveBeenCalledWith("Drink Toddy!");
       });
       it("should alert Drink Coke!", function() {
           spyOn(window, "alert");
           whatCanIDrink("15");
           expect(window.alert).toHaveBeenCalledWith("Drink Coke!");
       });
       it("should alert Drink Beer!", function() {
           spyOn(window, "alert");
           whatCanIDrink("19");
           expect(window.alert).toHaveBeenCalledWith("Drink Beer!");
       });
       it("should alert Drink Whisky!", function() {
           spyOn(window, "alert");
           whatCanIDrink("105");
           expect(window.alert).toHaveBeenCalledWith("Drink Whisky!");
       });
       
       });
});
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

});
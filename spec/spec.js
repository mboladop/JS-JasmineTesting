describe("Calculator test", function(){
    
    describe("Addition tests", function(){
        it("should return 4", function(){
            expect(addition(2,2)).toBe(4);
        });
        
        it("should not return 4 for different numbers", function(){
            expect(addition(20,22)).toBe(42);
        })
        
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            addition("Fish", 22);
            expect(window.alert).toHaveBeenCalledWith("Arguments must be both numbers");
        })
        it ("show an alert if we only supply one number", function(){
            spyOn(window, "alert");
            addition(42);
            expect(window.alert).toHaveBeenCalledWith("Arguments must be both numbers");
        })
    });
    
    describe("Subtraction tests", function() {
        it ("should return 4", function(){
          expect(subtraction(6,2)).toBe(4);  
        });
        
        it("should give back a negative number if num1 < num2", function(){
            spyOn(window, "alert");
            subtraction(6, 8);
            expect(window.alert).toHaveBeenCalledWith("negative result!");
        });
        
        it ("should show an alert for NaN", function() {
            spyOn(window, "alert");
            subtraction("Fish", 22);
            expect(window.alert).toHaveBeenCalledWith("Arguments must be both numbers");
        });
        
        it ("show an alert if we only supply one number", function(){
            spyOn(window, "alert");
            subtraction(42);
            expect(window.alert).toHaveBeenCalledWith("Arguments must be both numbers");
        });
    });
    
    describe("Multiplication tests", function(){
        it ("should return 4", function() {
            expect(multiplication(2,2)).toBe(4);
        });
    });
});
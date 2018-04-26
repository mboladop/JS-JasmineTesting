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
    })
})
describe("Calculator",function(){
	describe("Addtion Operation",function(){
		it("Should be able to add 2 numbers",function(){
			//Arrange
			var number1 = 10,
				number2 = 20,
				expectedResult = 30;

			//Act
			var result = add(number1,number2);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("Should be able to add 2 numbers in string format",function(){
			var number1AsString = "10",
				number2AsString = "20",
				expectedResult = 30;

			//Act
			var result = add(number1AsString,number2AsString);

			//Assert
			expect(result).toBe(expectedResult);
		});
		
		it("Should be able to return 0 when nothing is passed",function(){
			var	expectedResult = 0;

			//Act
			var result = add();

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("Should be able to return 0 when an empty string is passed",function(){
			var	expectedResult = 0;

			//Act
			var result = add("");

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("Should be able to add more than 2 numbers",function(){
			var number1 = 10,
				number2 = 20,
				number3 = 30	
			expectedResult = 60;

			//Act
			var result = add(number1,number2,number3);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("Should be able to add when a function returning a number is passed",function(){
			var f1 = function(){ return 10;},
				expectedResult = 10;

			//Act
			var result = add(f1);

			//Assert
			expect(result).toBe(expectedResult);
		});	
		it("Should be able to add when a function returning a function returning a number is passed",function(){
			var f1 = function(){ return function(){ return 10;}},
				expectedResult = 10;

			//Act
			var result = add(f1);

			//Assert
			expect(result).toBe(expectedResult);
		});
	});
});
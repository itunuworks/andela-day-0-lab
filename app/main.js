'use strict'

module.exports = {

	findMinMax: function(inputArray){
		var max = inputArray[0];
		var min = inputArray[0];
		var count = 1;

		while (count<inputArray.length){
			if (inputArray[count]<min){
				min = inputArray[count];
			}
			else if (inputArray[count]>max){
				max = inputArray[count];
			}
			count = count+1;
		}
		if (min == max){
			return [min];
		}
		else{
			return [min, max];
		}
	}, 

	fizzBuzz: function(inputValue){
		var returnValue = inputValue;

		if (inputValue%3==0){
			returnValue = "Fizz";
			if (inputValue%5==0){
				returnValue = "FizzBuzz";
			}
		}
		else if (inputValue%5==0){
			returnValue = "Buzz";
		}

		return returnValue;

	}, 

	aritGeo: function(inputArray){
		var returnValue = -1;
		var i;

		if (inputArray.length == 0){
			returnValue = 0;
		}
		else if (inputArray.length>2){
			//check if array is Arithmetic Progression
			var d = inputArray[1]-inputArray[0];
			for (i=2; i<inputArray.length; i++){
				if (inputArray[i] - inputArray[i-1] != d){
					break;
				}
				else if (inputArray.length-1 == i){
					returnValue = "Arithmetic";
				}
			}
			//if it is not an Arithmetic Progression, check if it is Geometric
			if (returnValue != "Arithmetic"){
				var r = inputArray[1]/inputArray[0];
				for (i=2; i<inputArray.length; i++){
					if (inputArray[i]/inputArray[i-1] != r){
						break;
					}
					else if (inputArray.length-1 == i){
						returnValue = "Geometric";
					}
				}
			}
		}
		return returnValue;
	}

}
'use strict'

module.exports = {

	findMinMax: function(numArray){
		var max = numArray[0];
		var min = numArray[0];
		var count = 1;
		while (count<numArray.length){
			if (numArray[count]<min)
				min = numArray[count];
			else if (numArray[count]>max)
				max = numArray[count];
			count = count+1;
		}
		if (min == max)
			return [min];
		else
			return [min, max];
	}, 

	fizzBuzz: function(arg){
		var returnStr = arg;

		if (arg%3==0){
			returnStr = "Fizz";
			if (arg%5==0)
				returnStr = "FizzBuzz";
		}
		else if (arg%5==0)
			returnStr = "Buzz";

		return returnStr;

	}, 

	aritGeo: function(myArray){
		var returnValue = -1;
		var i;

		if (myArray.length == 0)
			returnValue = 0;
		else if (myArray.length>2){
			//check if array is Arithmetic Progression
			var d = myArray[1]-myArray[0];
			for (i=2; i<myArray.length; i++){
				if (myArray[i] - myArray[i-1] != d)
					break;
				else if (myArray.length-1 == i)
					returnValue = "Arithmetic";
			}
			//if it is not an Arithmetic Progression, check if it is Geometric
			if (returnValue != "Arithmetic"){
				var r = myArray[1]/myArray[0];
				for (i=2; i<myArray.length; i++){
					if (myArray[i]/myArray[i-1] != r)
						break;
					else if (myArray.length-1 == i)
						returnValue = "Geometric";
				}
			}
		}
		return returnValue;
	}

}
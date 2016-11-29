var input = document.getElementById('screen');

// global scope  array shortterm
var shortterm = [nill, nill, nill, nill, nill, nill];

function refresh(){
	console.log();

	input.innerHTML = '';

}

function number(number) {
	input.innerHTML += number;

		// if shortterm[1] is still at nill , the number gets added to shortterm[0]//
	if( shortterm[1] == nill){

		if(shortterm[0] == nill){
			shortterm[0] = number;

		}else{
			// if shortterm [0] needs more then 1 number in it (this only works if shorttem [1] is still at nill)//
			shortterm[0] += number;
		}
	}else{	// if shortterm[1] already has something in it , a number gets added to shortterm[2]//
		if (shortterm[2] == nill) {
			shortterm[2] = number;
		
		}else 
			shortterm[2] += number;

	}
}



function addopp(operator){
input.innerHTML += operator;

	if(shortterm[1] == nill){
		if (shortterm[0] == nill) {
			shortterm[0] = 0;
			shortterm[1] = operator;	}



	

}


/*function calculate(number){

case "+":
	var result = parsefloat(number) + parsefloat(number)
	input.innerHTML = result;

case "-":
	var result = parsefloat(number) - parsefloat(number)
	input.innerHTML = result;

case "/":
	var result = parsefloat(number) / parsefloat(number)
	input.innerHTML = result;

case "x":
	var result = parsefloat(number) * parsefloat(number)
	input.innerHTML = result;
}*/
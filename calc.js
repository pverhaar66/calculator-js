var input = document.getElementById('screen');

// global scope  array shortterm
var shortterm = [null,null,null,null,1,1];

function refresh(number){
	console.log();

	input.innerHTML = '';
		shortterm = [null,null,null,null,1,1];
	

}

function goal(number) {
	input.innerHTML += number;

		// if shortterm[1] is still at nill , the number gets added to shortterm[0]//
	if( shortterm[1] == null){

		if(shortterm[0] == null){
			shortterm[0] = number;

		}else{
			// if shortterm [0] needs more then 1 number in it (this only works if shorttem [1] is still at nill)//
			shortterm[0] += number;
		}
	}else{	// if shortterm[1] already has something in it , a number gets added to shortterm[2]//
		if (shortterm[2] == null) {
			shortterm[2] = number;
		
		}else 
			shortterm[2] += number;

	}
}



function addopp(operator){
input.innerHTML += operator;

		if(shortterm[1] == null){
			if (shortterm[0] == null) {
				shortterm[0] = 0;
				shortterm[1] = operator;
				}
					else if (shortterm[0] != null && shortterm[2] == null) {
					shortterm[1] = operator;
					} 

			} else if (shortterm[0] != null && shortterm[2] != null) {

				// if a operator is added when shortterm[3] is already filled it calculates it and adds the operator//
				calculate();
				shortterm[3] = shortterm[0];
				shortterm[2] = null;
				shortterm[1] = null;
				shortterm[1] = operator;
	}
}
function calculate(number){
	if (shortterm[2] == null){
		shortterm[2] = shortterm[0];
	}


	switch(shortterm[1]){

	case "+":
    	shortterm[3] = (parseFloat(shortterm[0])*10 + parseFloat(shortterm[2])*10) /10;
    	input.innerHTML = shortterm[3];
        break;
    case "-":
    	shortterm[3] = (parseFloat(shortterm[0])*10 - parseFloat(shortterm[2])*10) /10;
    	input.innerHTML = shortterm[3];
        break;
    case "/":
    	shortterm[3] = (parseFloat(shortterm[0])*10 / parseFloat(shortterm[2])*10) /100;
    	input.innerHTML = shortterm[3];
        break;
    case "*":
    	shortterm[3] = (parseFloat(shortterm[0])*10) * (parseFloat(shortterm[2])*10) /100;
    	input.innerHTML = shortterm[3];
        break;
    default:
    	console.log(" Error: No operator");
        break;
	}
}
var numbers = [];
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

console.log(numbers);
numbers[0] = document.getElementById('zero')	
console.log(document.getElementById('zero').value);
numbers[0].setAttribute("onclick", "javascript:number(0)");

numbers[1] = document.getElementById('one');
console.log(numbers[1].value);

numbers[2] = document.getElementById('two');
console.log(numbers[2].value);

numbers[3] = document.getElementById('three');
console.log(numbers[3].value);

numbers[4] = document.getElementById('four');
console.log(numbers[4].value);

numbers[5] = document.getElementById('five');
console.log(numbers[5].value);

numbers[6] = document.getElementById('six');
console.log(numbers[6].value);

numbers[7] = document.getElementById('seven');
console.log(numbers[7].value);

numbers[8] = document.getElementById('eight');
console.log(numbers[8].value);

numbers[9] = document.getElementById('nine');
console.log(numbers[9].value);

numbers[10] = document.getElementById('minus');
console.log(numbers[10].value);  

numbers[11] = document.getElementById('plus');
console.log(numbers[11].value);

numbers[12] = document.getElementById('equals');
console.log(numbers[12].value);

numbers[13] = document.getElementById('share');
console.log(numbers[13].value);

numbers[14] = document.getElementById('dot');
console.log(numbers[14].value);

numbers[15] = document.getElementById('cbutton');
console.log(numbers[15].value);
numbers[15].setAttribute("onClick", "javascript:functie('c')");

function functie(c){
	console.log(c);

	var input = document.getElementById('screen');
	input.innerHTML = '';


	var input = document.getElementById('screen');
	input.innerHTML = '';

}

function number (text) {
	console.log(text);

	.innerHTML




}


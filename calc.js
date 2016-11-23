var numbers = [];
/*var operators = ['+', '-', 'x', '÷'];*/
var decimalAdded = false;

console.log(numbers);
numbers[0] = document.getElementById('zero')	
console.log(document.getElementById('zero').value);
numbers[0].setAttribute("onclick", "javascript:number(0)");

numbers[1] = document.getElementById('one');
console.log(numbers[1].value);
numbers[1].setAttribute("onclick", "javascript:number(1)");

numbers[2] = document.getElementById('two');
console.log(numbers[2].value);
numbers[2].setAttribute("onclick", "javascript:number(2)");

numbers[3] = document.getElementById('three');
console.log(numbers[3].value);
numbers[3].setAttribute("onclick", "javascript:number(3)");

numbers[4] = document.getElementById('four');
console.log(numbers[4].value);
numbers[4].setAttribute("onclick", "javascript:number(4)");

numbers[5] = document.getElementById('five');
console.log(numbers[5].value);
numbers[5].setAttribute("onclick", "javascript:number(5)");

numbers[6] = document.getElementById('six');
console.log(numbers[6].value);
numbers[6].setAttribute("onclick", "javascript:number(6)");

numbers[7] = document.getElementById('seven');
console.log(numbers[7].value);
numbers[7].setAttribute("onclick", "javascript:number(7)");

numbers[8] = document.getElementById('eight');
console.log(numbers[8].value);
numbers[8].setAttribute("onclick", "javascript:number(8)");

numbers[9] = document.getElementById('nine');
console.log(numbers[9].value);
numbers[9].setAttribute("onclick", "javascript:number(9)");

numbers[10] = document.getElementById('cbutton');
console.log(numbers[10].value);
numbers[10].setAttribute("onClick", "javascript:functie('c')");

numbers[11] = document.getElementById('multiply');
console.log(numbers[11].value);
numbers[11].setAttribute("onClick", "javascript:number(11)");

numbers[12] = document.getElementById('divide');
console.log(numbers[12].value);
numbers[12].setAttribute("onClick", "javascript:number(12)");

numbers[13] = document.getElementById('plus');
console.log(numbers[13].value);
numbers[13].setAttribute("onClick", "javascript:number(13)");

numbers[14] = document.getElementById('minus');
console.log(numbers[14].value);
numbers[14].setAttribute("onClick", "javascript:number(14)");

numbers[15] = document.getElementById('dot');
console.log(numbers[15].value);
numbers[15].setAttribute("onClick", "javascript:number(15)");

numbers[16] = document.getElementById('equals');
console.log(numbers[16].value);
numbers[16].setAttribute("onClick", "javascript:number(16)");




function functie(c){
	console.log(c);

	var input = document.getElementById('screen');
	input.innerHTML = '';	
}




function number (index) {
	console.log(index);
	var limit
	var input = document.getElementById('screen');
	input.innerHTML = numbers[index].value;

	
	

	for (var i = 1 ; i < index; i++) {
		input.innerHTML = ;
	
		limit = input.length;

	}if (limit > 16) {

		input.innerHTML = ' not enough space';
	}



}

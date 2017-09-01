var femaleNames = ['Ania', 'Basia', 'Ola', 'Jola', 'Kasia'];
var maleNames = ['Arek', 'Jarek', 'Olek', 'Darek', 'Wojtek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = '0la'
var x = allNames.push(newName);

  if (allNames.indexOf(newName) === -1) {
	console.log(x);
	}
console.log(allNames);

	
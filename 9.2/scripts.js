var femaleNames = ['Ania', 'Basia', 'Ola', 'Jola', 'Kasia'];
var maleNames = ['Arek', 'Jarek', 'Olek', 'Darek', 'Wojtek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Maniek'

if (allNames.indexOf(newName) === -1) {
	 
	allNames.push(newName);
}
console.log(allNames);
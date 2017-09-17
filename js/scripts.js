function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a*h/2;
	} else {
		return 'Nieprawidlowe dane';
	}
}

console.log(getTriangleArea(10,6));

var triangle1Area = getTriangleArea(10,15);

console.log(triangle1Area);

var triangle2Area = getTriangleArea(10,-2);

console.log(triangle2Area);

var triangle3Area = getTriangleArea(10,0);

console.log(triangle3Area);

var femaleNames = ['Ania', 'Basia', 'Ola', 'Jola', 'Kasia'];
var maleNames = ['Arek', 'Jarek', 'Olek', 'Darek', 'Wojtek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'krzys'
var x = allNames.push(newName);

//console.log(allNames);

//var indexOf(newName) = allNames.indexOf(newName);

//console.log('The search value is on ' + indexOf(newName) + ' position');

//console.log(allNames[indexOf(newName)]);


  if (allNames.indexOf(newName) === -1) {
	console.log(x);
	} 
console.log(allNames);
else {
		console.log('To imię jest w bazie');
	}

	
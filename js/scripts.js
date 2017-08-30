// scripts.js	

function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a*h/2;
	}
	else {
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
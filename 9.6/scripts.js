var addElem = document.getElementById('addElem')
var list = document.getElementById('list')
var line = document.getElementsByTagName('li');

addElem.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerHTML = 'item ' + line.length;
	
	list.appendChild(element);
	
});
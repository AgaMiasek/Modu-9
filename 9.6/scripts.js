var addElem = document.getElementById('addElem')
var list = document.getElementById('list')


addElem.addEventListener('click', function() {
	var element = document.createElement('li');
	var line = document.getElementsByTagName('li');
	element.innerHTML = 'item' + line.length;
	
	list.appendChild(element);
	
});
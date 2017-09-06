var addElem = document.getElementById('addElem')
var list = document.getElementById('list')


addElem.addEventListener('click', function() {
	var line = document.getElementsByTagName('li');
	var item = 'item' + line.length;
	list.innerHTML += '<li>' + item + '</li>';
});
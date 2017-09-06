var addElem = document.getElementById('addElem')
var list = document.getElementById('list')


addElem.addEventListener('click', function() {
	var line = document.getElementsByTagName('li');
	var item = 'item' + line.length;
	list.innerHTML += '<li>' + item + '</li>';
});
function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
});
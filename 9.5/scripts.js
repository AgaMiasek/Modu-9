var  getButton = document.getElementsByClassName('button');

for(var i = 0; i < getButton.length; i++){
	
	var inscription = getButton[i].innerText;
	
	alert(inscription);
}


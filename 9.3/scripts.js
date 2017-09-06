
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';

var upperCase = dinosaur.toUpperCase();

//console.log(upperCase);

var textCharsAfter = text.replace('Velociraptor',upperCase);

//console.log(textCharsAfter);


var upperCaseAfter = textCharsAfter.substr(0, textCharsAfter.length/2);

console.log(upperCaseAfter);



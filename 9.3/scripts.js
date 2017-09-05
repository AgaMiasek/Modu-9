var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';

var textCharsAfter = text.replace('Velociraptor',dinosaur);

//console.log(textCharsAfter);

var upperCase = textCharsAfter.toUpperCase();

//console.log(upperCase);

var upperCaseAfter =upperCase.substr(0, upperCase.length/2);

console.log(upperCaseAfter);



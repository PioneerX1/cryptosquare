
var inputString = "don't compare yourself to others, compare yourself to the person you were yesterday";
var newString = "";
newString = inputString.replace(/[ !%$;.,_'-?]/g,'');
newString = newString.toLowerCase();

var totalElements = newString.length;
var sqRoot = Math.sqrt(totalElements);
var columns;
var rows;

if (sqRoot%1 === 0) {
	columns = sqRoot;
  rows = sqRoot;
} else {
	columns = Math.floor(sqRoot);
  rows = (Math.floor(sqRoot)) + 1;
}

var normalArray = [];
var encryptArray = [];
var letterCount = 0;

for (var i=0; i < rows; i++) {
	var newArray = [];
  normalArray[i] = newArray;
  //normalArray[i] = new Array(rows);

  for (var j=0; j < columns; j++) {
    normalArray[i][j] = newString.charAt(letterCount);
    letterCount++;
  }
}

//alert(normalArray.toString());
//alert(normalArray[0][0].toString());
//alert(normalArray[1][0].toString());
//alert(normalArray[2][0].toString());
//alert(encryptArray.toString());

var elementCount = 0;

for(var i=0; i < rows; i++) {
	for(var j=0; j < columns; j++) {
  	encryptArray[elementCount] = normalArray[j][i];
    elementCount++;
  }
}

alert(encryptArray.toString());

for (var i=0; i < elementCount; i++) {
	if ((i+1)%5===0) {
  	encryptArray[i] = encryptArray[i] + " ";
  }
}

alert(encryptArray.toString());

var outputString = encryptArray.toString();
outputString = outputString.replace(/[,]/g,'');
//outputString = outputString.replace(/[undefined]/g,'');
alert(outputString);

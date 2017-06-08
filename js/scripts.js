

var inputString = "don't compare yourself to others, compare yourself to the person you were yesterday";
var newString = "";
newString = inputString.replace(/[ !%$;.,_'-?]/g,'');
newString = newString.toLowerCase();
//alert(newString.length + " " + newString);

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
//alert(columns + " " + rows);
//alert(newString);

/*
for (var i=0; i < 69; i++) {
	encryptArray[i] = newString.charAt(i);
}
alert(encryptArray.toString());
*/

for (var i=0; i < columns; i++) {
	for (var j=0; j < rows; j++) {
  	normalArray[letterCount] = newString.charAt(letterCount);
    letterCount++;
  }
}

alert(normalArray.toString());
letterCount = 0;

for (var i=0; i < columns; i++) {
	for (var j=0; j < rows; j++) {
  	encryptArray[j][i] = normalArray[letterCount];
    letterCount++;
  }
}

alert(encryptArray.toString());



//var test1 = 1;
//alert(newString.charAt(test1));
//alert(encryptArray.toString());

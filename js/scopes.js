var fun1 = function() {
    console.log('a: ' + a);
    console.log('b: ' + b);
    
	var a = 'a';
	if (a) {
	    var b = 'b';
		console.log('a: ' + a);
		console.log('b: ' + b);
		a = 'aa';
	}
	c = 'c';
	console.log('a: ' + a);
	console.log('b: ' + b);
	
}
var d = 'd';
fun1();
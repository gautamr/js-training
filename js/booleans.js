var a;
var b = 'hello';
var bool = true;

if (typeof anythingundefined === 'undefined' ) {
    console.log('you can see it because "anythingundefined" is undefined');
}

if (a) {
    console.log('you will not see it');
}

if (b) {
    console.log('you will see it');
}

if (bool) {
    console.log('you will see it also');
}

var s = '';
if (s) {
    console.log('you will not see it');
}

s = 'hi';
if (s) {
    console.log('string: you will see it also');
}

var obj = {};
if (obj) {
    console.log('object: you will see it also');
}

console.log(0 == false);   // true
console.log(0 === false);  // false, because they are of a different type
console.log(1 == "1");     // true, auto type coercion
console.log(1 === "1");    // false, because they are of a different type
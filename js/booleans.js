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
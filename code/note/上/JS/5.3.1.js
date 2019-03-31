var a = {};

var b = Object.create(a);

function F(){}
F.prototype = a;

console.log(b instanceof F);

var c;
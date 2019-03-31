/**
 * 函数声明会被提升， 函数表达式不会。
 */

foo2();

function foo2(){
  var a;
  console.log(a); // undefined
  a = 2;
}

foo(); // TypeError: foo is not a function

var foo = function () {
  var a;
  console.log(a);
  a = 2;
}


var foo3 = function bar () {
  var a;
  console.log(a); // undefined
  a = 2;
}

foo3();
bar(); // ReferenceError: bar is not defined


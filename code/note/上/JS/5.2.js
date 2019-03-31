/**
 * 简单的闭包
 */

function foo() {
  var a = 1;
  var bar = function () {
    a += 1;
    console.log(a);
  }

  return bar;
}

var fn = foo();
for (let i = 0; i < 10; i++) {
  fn();
}

/**
 *  ---
 */

function a(){
  var _a = 1;
  return function(test){
    console.log(_a++, test);
  }
}
var fn = a();

function b(fn){
  var _a = 10;
  fn(_a++);
}

b(fn);
b(fn);
b(fn);
b(fn);
b(fn);
b(fn);
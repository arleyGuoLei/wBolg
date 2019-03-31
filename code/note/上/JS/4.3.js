// foo();

var a = true;

if(a){
  function foo(){ console.log(1) }
} else {
  function foo(){ console.log(2) }
}

foo(); // TypeError: foo is not a function 书上写得是2 在普通块内部的函数声明会被提升到所在作用域顶部。

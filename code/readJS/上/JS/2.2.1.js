window.t = 3;
var t = 0;

function a(){
  a.t = 1;
  console.log(this.t);
  b();
}

function b(){
  b.t = 2;
  console.log(this.t);
  c();
}

function c(){
  c.t = 3;
  console.log(this.t);
}

a();
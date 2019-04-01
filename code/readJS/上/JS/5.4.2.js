var anotherObj = {
  cool: ()=>{
    console.log('cool');
  }
}

var myObj = Object.create(anotherObj);

myObj.doCool = function(){
  console.log(this);
  this.cool();
  debugger
};

myObj.doCool();

console.log('o');



function foo(){ }
var a = new foo();
console.log(a);
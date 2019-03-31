var anotherObj = {
  a: 2
};

var myObj = Object.create(anotherObj);

console.log(anotherObj.a);
console.log(myObj.a);

console.log(anotherObj.hasOwnProperty('a'));
console.log(myObj.hasOwnProperty('a'));

myObj.a++; // 这行之后, 在myObj中创建a属性
anotherObj.a;
myObj.a;
()=>{

}
if(a===b){}
console.log(myObj.hasOwnProperty('a'));
var anotherObj = {
  a: 2
};

var myObj = Object.create(anotherObj, {
  b: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 10
  }
})
myObj.a++;
console.log(myObj.a);
var myObj = {
  // a: 2,
  // get a(){
  //   return 1;
  // },
  set a(val){
    this._a_ = val * 2;
  }
}

console.log(myObj.a);
myObj.a = 2;
console.log(myObj.a);
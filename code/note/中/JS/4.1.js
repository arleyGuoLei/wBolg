{
  let x = 1;
  function *foo(){
    x++;
    console.log(x);
    yield;
    console.log(x);
    yield;
    console.log(x+1);
  }

  let it = foo();
  it.next();
  (()=>x++)()
  console.log(x);
  it.next();
  (()=>{x=0})()
  it.next();
}
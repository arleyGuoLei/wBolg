{
  function* foo(x) {
    var y = x * (yield);
    return y;
  }
  var it = foo(6);
  // 启动foo(..)
  it.next();
  var res = it.next(7);
  console.log(res);
  // res.value; // 42
}

{
  function* foo(x) {
    var y = x * (yield "Hello"); // 
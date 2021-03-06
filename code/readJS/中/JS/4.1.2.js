{
  function* foo() {
    var x = yield 2;
    //  z 从 1 增加到 2 
    //  z 再次从 2递增到 3
    z++;
    var y = yield (x * z);
    console.log(x, y, z);
  }
  var z = 1;
  var it1 = foo();
  var it2 = foo();
  // (1)  *foo() 的两个实例同时启动，两个 next() 分别从 yield 2 语句得到值 2 。
  var val1 = it1.next().value; // 2 <-- 1="" 2="" 3="" 4="" 5="" 10="" 11="" 20="" 22="" 40="" 200="" 300="" 600="" yield="" var="" val2="it2.next().value;" <--="" *="" 也就是="" ，发送到第一个生成器实例="" it1="" ，因此="" x="" 得到值="" 然后="" 通过="" 发出，将="" val1="" 设置为="" 。="" 10).value;="" x:20,="" z:2="" ，发送到第二个生成器实例="" it2="" 5).value;="" x:200,="" z:3="" y="" ，然后打印出="" z="" 的值分别是="" it1.next(val2="" 2);="" y:300="" ，然后打印出x="" 的值分别为="" it2.next(val1="" 4);="" y:10="" }="" (1)="" *foo()="" 的两个实例同时启动，两个="" next()="" 分别从="" 语句得到值="" (2)="" 从="" 增="" 加到="" ，然后="" (3)="" 再次从="" 递增到="" (4)="" ，然后打印="" 出="" (5)="" {="" a="1;" b="2;" function="" foo()="" a++;="" a;="" +="" 3;="" bar()="" b--;="" b;="" 2;="" function*="" yield;="" b)="" 8)="" (yield="" step(gen)="" it="gen();" last;="" return="" ()="" 不管yield出来的是什么，下一次都把它原样传回去！="" last="it.next(last).value;" };="" 确保重新设置a和b="" s1="step(foo);" s2="step(bar);" 首次运行*foo()="" s1();="" 现在运行*bar()="" s2();="" console.log(a,="" b);="">1 b=>1
  s2(); // yield 8 a=>1 b=>1
  s1(); // a++; a=>2 b=>1
  s2(); // a = 8 + b; a=>9 b=>1
  // yield 2
  s1(); // b = b * a; a=>9 b=>9
  // yield b
  s1(); // a = b + 3; a=>12 b=>9
  s2(); // b = a * 2; a=>12 b=>18
}</-->
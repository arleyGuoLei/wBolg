{
  let obj = {
    id: 1,
    name: "arley",
    hobby: "学习"
  }
  let proxy = new Proxy(obj, {
    // 拦截设置
    set(target, key, value) {
      if (key === "hobby") {
        return target[key] = "我爱" + value;
      }
    },
    // 拦截获取
    get(target, key) {
      if (target[key] === 1) {
        let value = String(target[key]);
        return target[key] = "2016070143" + value.padStart(2, 0);
      }
      if (target[key] === "arley") {
        return target[key] = "我是计科三班的同学.";
      }

      return target[key];
    },

    //拦截 key in object 操作
    has(target,key){
      if(key === "name"){
        return target[key];
      }else{
        return false;
      }
    }

  });

  // console.log(proxy);

  // 1.
  console.log(proxy.name);
  // 当获取到的 target[key] === "arley" 的时候，返回 "我是计科三班的同学.";
  // 所以输出为：我是计科三班的同学.
  // 此时的获取器 get 中的值为：
  /*
    key = "name"
    target = Object {id: 1, name: "arley", hobby: "学习"}
  */

  // 2.
  console.log(proxy.id)
  // 同1. 当id为1的时候，加入前缀

  // 3.
  proxy.hobby = "ES6";
  console.log(proxy.hobby);

  // set 的第三个参数 value 为 = 后面的内容，即ES6.
  // 所以设置之后的proxy.hobby = "我爱ES6",自动加上了前缀

  // 4. obj 对象也会跟着改变  且  proxy 和 log值一样了。
  console.log("obj:" + JSON.stringify(obj));
  console.log("proxy:" + JSON.stringify(proxy));
  // obj:{"id":"201607014301","name":"我是计科三班的同学.","hobby":"我爱ES6"}
  // proxy:{"id":"201607014301","name":"我是计科三班的同学.","hobby":"我爱ES6"}

  // 5.拦截 key in object
  console.log("key->","name" in proxy,"id" in proxy,"id" in obj);
  // key-> true false true  注意：in obj 会返回true，因为没经过Proxy
  

}
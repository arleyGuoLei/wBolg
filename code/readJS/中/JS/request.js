function action(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      (Math.random() <= 0.5)="" ?="" resolve({="" state:="" 'success',="" id="" })="" :="" 'fail',="" });="" },="" math.random()="" *="" 300);="" }="" function="" notify(obj)="" {="" console.log('notify=""> ', JSON.stringify(obj));
}

let idList = []
for (let i = 0; i <= 10000;="" i++)="" {="" idlist.push(i);="" }="" 10001次发送="" **="" *="" @param="" {function}="" action="" 异步数据回调函数="" -="" 接口="" {array}="" idlist="" 异步获取数据回调所需要参数="" 传递的数组，需遍历="" notify="" 异步回调通知回调函数="" return="" 异步数据回调成功或失败的id结果="" 需返回promise="" async function="" getprolist(action,="" idlist,="" notify)="" 补充完成函数="" const="" num="10;" 并发数目="" 10次一并发="" let="" times="Math.ceil(idList.length" num);="" 要进行多少次循环=""> idList的长度 / 每次并发的数目, 向上取整(最后一次并发可能不达并发数)
  let id = 0;

  // 最终返回的promise中的数据
  let promiseRes = {
    success: [],
    fail: []
  };

  for (let i = 0; i < times; i++) {

    // 创建需要并发的promise
    let promise = [];
    for (let j = 0; id < (idList.length - 1); j++) {
      id = i * num + j;
      promise[j] = action(idList[id]);
    }
    
    // 通过 yield 和 promise 形成并发策略
    let r = await Promise.all(promise); // 并发处理
    
    // 回调处理并发结果
    for (const res of r) {
      notify(res);
      if (res.state === 'success') {
        promiseRes.success.push(res);
      } else {
        promiseRes.fail.push(res);
      }
    }
  }
  // 返回所有并发之后的数据
  return Promise.resolve(promiseRes);
}



const res = getProList(action, idList, notify);
res.then((res) => { console.log(res) });

</=></=>
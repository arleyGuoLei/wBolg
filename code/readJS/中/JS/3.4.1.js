// {
//   /**
//    * p1 和 p2 的then 轮流执行。
//    */
//   const p1 = Promise.resolve(1);
//   p1.then((val) => {
//     console.log(val);
//     return 2 * val;
//   }).then((val) => {
//     console.log(val);
//     return 2 * val;
//   }).then((val) => {
//     console.log(val);
//     return 2 * val;
//   }).then((val) => {
//     console.log(val);
//     return 2 * val;
//   }).then((val) => {
//     console.log(val);
//     return 2 * val;
//   }).then((val) => {
//     console.log(val);
//     return 2 * val;
//   }).then((val) => {
//     console.log(val);
//     return 2 * val;
//   })

//   const p2 = Promise.resolve(2);
//   p2.then((val) => {
//     console.log('->>>> '+ val);
//     return 2 * val;
//   }).then((val) => {
//     console.log('->>>> '+ val);
//     return 2 * val;
//   }).then((val) => {
//     console.log('->>>> '+ val);
//     return 2 * val;
//   }).then((val) => {
//     console.log('->>>> '+ val);
//     return 2 * val;
//   }).then((val) => {
//     console.log('->>>> '+ val);
//     return 2 * val;
//   }).then((val) => {
//     console.log('->>>> '+ val);
//     return 2 * val;
//   }).then((val) => {
//     console.log('->>>> '+ val);
//     return 2 * val;
//   })
// }

{
  /**
   * p1 和 p2 
   */
  const p1 = Promise.resolve(1);
  p1.then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      resolve(val * 2);
    })
  }).then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      resolve(val * 2);
    })
  }).then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      resolve(val * 2);
    })
  }).then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      resolve(val * 2);
    })
  })
  const p2 = Promise.resolve(1);
  p2.then((val) => {
    console.log('->>>> ' + val);
    return 2 * val;
  }).then((val) => {
    console.log('->>>> ' + val);
    return 2 * val;
  }).then((val) => {
    console.log('->>>> ' + val);
    return 2 * val;
  }).then((val) => {
    console.log('->>>> ' + val);
    return 2 * val;
  })
}

{
  function delay(time) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, time);
    });
  }
  delay(100) // 步骤1
    .then(function STEP2() {
      console.log("step 2 (after 100ms)");
      return delay(200);
    })
    .then(function STEP3() {
      console.log("step 3 (after another 200ms)");
    })
    .then(function STEP4() {
      console.log("step 4 (next Job)");
      return delay(50);
    })
    .then(function STEP5() {
      console.log("step 5 (after another 50ms)");
    })
}
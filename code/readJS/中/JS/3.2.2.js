{
  let p = new Promise((resolve, reject)=>{
    console.log('============================');
    resolve('P');
  });

  p.then(()=>{
    p.then(()=>{
      console.log('C');
    })

    console.log('A');
  });

  p.then(()=>{
    console.log('B');
  });
}

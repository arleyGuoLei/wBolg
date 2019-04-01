{
  const p = Promise.resolve('test');
  const res = p.then((val)=>val);
  console.log(res);
  res.then(()=>{
    console.log(res);
  });
}
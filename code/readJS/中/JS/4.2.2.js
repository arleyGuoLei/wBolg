{
  let a = [1, 3, 5, 7, 9];
  console.log(a[Symbol.iterator]().next());
  let it = a[Symbol.iterator]();
  
  console.info(it.next().value); // 1
  console.info(it.next().value); // 3
  console.info(it.next().value); // 5
}
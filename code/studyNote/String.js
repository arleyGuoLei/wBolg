
const name = 'cc'
const gender = 'male'
const hobby = 'basketball'
// 实现tag最终输出 '姓名：**cc**，性别：**male**，爱好：**basketball**'
function tag(strings) {

  strings = strings.replace(/\$\{(.*?)\}/g, (match, key) => eval(key));
  return strings;
}
const str = tag("`姓名：${name}，性别：${gender}，爱好：${hobby}`")
console.log(str) // '姓名：**cc**，性别：**male**，爱好：**basketball**'















// // setInterval(() => {
// //   const now = new Date()
// //   const hours = now.getHours().toString()
// //   const minutes = now.getMinutes().toString()
// //   const seconds = now.getSeconds().toString()
// //   console.log(`${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`)
// // }, 1000)

// let address = '华北科技学院'
// let name = 'Arley'
// let str = '${name}在${address}上学...'
// // 模拟一个方法 myTemplate(str) 最终输出 'Arley在华北科技学院上学...'
// function myTemplate(str) {
//   // try it
//   // let arr = str.match(/\${(.*?)}/g);
//   // arr.forEach(item => {
//   //   let itemIn = item.substring(2, item.length - 1);
//   //   let val = eval(itemIn);
//   //   str = str.replace(item,val);
//   // });
//   // return str;

//   return str.replace(/\$\{(.*?)\}/g, (match, key) => eval(key));
// }
// console.log(myTemplate(str)) // Arley在华北科技学院上学...


// let str = '${name}在${address}上学...'
// let s = str.match(/\$\{(.*?)\}/g);
// s.forEach((item,key) => {
//   console.log(item,key);
// });

// str.replace(/\$\{(.*?)\}/g, (match, key) => {
//   console.log(key,match);
// });
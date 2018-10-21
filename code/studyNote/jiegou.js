// // 第二题
// var request = {
//   body: {
//     username: 'lei',
//     password: '123'
//   }
// }

// // var body = request.body
// // var username = body.username
// // var password = body.password

// // console.log(`${username} - - - ${password}`);

// let { username, password } = request.body
// console.log(`${username} - - - ${password}`);


const number = [1,2,3,4,5]
const [first, ...rest] = number
console.log(rest) //2,3,4,5
const reg = /^[a-zA-Z]{1}\w{4,19}$/
console.log(reg.test('i7xy'))
console.log(reg.test('i7xy.cn'))
console.log(reg.test('7_i7xy'))
console.log(reg.test('i7xy_cn'))
console.log(reg.test('i7xy_xx_666666666'))

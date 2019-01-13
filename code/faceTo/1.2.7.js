const str = 'arley_i7xy.cn_666'
const searchText = 'i7xy'
const s1 = str.substring(str.indexOf(searchText),str.indexOf(searchText) + searchText.length)
const s2 = str.substr(str.indexOf(searchText),searchText.length)
console.log(s1,s2)


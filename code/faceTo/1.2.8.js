const $_GET = (name) => {
    const url = '?name=arley&age=18&sex=superman'
    // const url = location.href.search
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
    var r = url.substr(1).match(reg)
    console.log(r) // Array(4) ["name=arley&", "", "arley", "&"]
    if (r != null) return unescape(r[2]) // 返回解码的字符串
    return null
}

console.log($_GET('name'))
console.log($_GET('age'))
console.log($_GET('sex'))
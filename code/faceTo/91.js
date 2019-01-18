let arr = [1,4,6,7,9,11,7,6,5,4,3,2]

arr = arr.sort((v1,v2)=>{
    return v1-v2 // 小到大排序
})


var b = 1

function c(){
    console.log(arguments)
    console.log(b)
    if(!b){
        var b = 2
    }
    console.log(b)
}
c(1,2,3)



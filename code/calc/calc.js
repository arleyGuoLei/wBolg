// 原生es5 实现计算器
String.prototype.trim = function () {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}

function $(dom) {
  if (dom.indexOf("#") != -1) {
    dom = dom.substring(1);
    return document.getElementById(dom);
  } else if (dom.indexOf(".") != -1) {
    dom = dom.substring(1);
    return document.getElementsByClassName(dom);
  } else {
    return document.getElementsByTagName(dom);
  }
}

window.onload = function () {
  function hasSymbol() {
    reg = new RegExp("[×÷+-]");//表达式里面的符号顺序居然会影响结果
    if (reg.test(result.value)) {
      return true;
    }
    return false;
  }
  var numDom = $(".num");
  var symbolDom = $(".symbol");
  var result = $("#calcResult");
  var equ = $("#equ");
  var clear = $("#clear");

  for (var i = 0; i < numDom.length; i++) {
    (function (temp) {
      numDom[temp].addEventListener('click', function () {
        var num = numDom[temp].getAttribute("data-num");
        result.value += num;
      });
    })(i);
  }

  for (var i = 0; i < symbolDom.length; i++) {
    (function (temp) {
      symbolDom[temp].addEventListener('click', function () {
        var symbol = symbolDom[temp].getAttribute("data-symbol");
        if (hasSymbol()) {
          // 已经有运算符，执行计算
          equ.click();
        } else {
          result.value = result.value + " " + symbol + " ";
        }

      });
    })(i);
  }

  equ.onclick = function () {
    if (result.value !== "") {
      if (hasSymbol()) {
        var fc = result.value.trim();
        if (fc.indexOf("+") !== -1) {
          // +
          var arrNum = fc.split("+");
          var answer = Number(arrNum[0]) + Number(arrNum[1]);
        } else if (fc.indexOf("-") !== -1) {
          var arrNum = fc.split("-");
          var answer = Number(arrNum[0]) - Number(arrNum[1]);
        } else if (fc.indexOf("×") !== -1) {
          var arrNum = fc.split("×");
          var answer = Number(arrNum[0]) * Number(arrNum[1]);
        } else if (fc.indexOf("÷") !== -1) {
          var arrNum = fc.split("÷");
          // if (arrNum[1] !== 0) {
            var answer = Number(arrNum[0]) / Number(arrNum[1]);
          // } else {
          //   result.value = "除数不能为０";
          //   return;
          // }
        }
        result.value = answer;

      }
    }
  }
  clear.onclick = function(){
    result.value = "";
  }

}











  /* 多种方法绑定click*/
  /* -------------------------------------------------*/
  // //方法一
  // for (var i = 0; i < numDom.length; i++) {
  //   (function(val){
  //     numDom[val].onclick = function(){
  //       var num = numDom[val].getAttribute("data-num");
  //       result.value = num;
  //     }
  //   })(i);
  // }

  // // 方法二
  // for (var i = 0; i < numDom.length; i++) {
  //   numDom[i].i = i;
  //   numDom[i].onclick = function () {
  //     var num = numDom[this.i].getAttribute("data-num");
  //     result.value = num;
  //   }
  // }

  // // 方法三
  // for (var i = 0; i < numDom.length; i++) {
  //     numDom[i].i = i;
  //     numDom[i].onclick = (function (arg) {
  //       return function(){
  //         var num = numDom[arg].getAttribute("data-num");
  //         result.value = num;
  //       }
  //     })(i);
  //   }

  // // 方法四

  // for (var i = 0; i < numDom.length; i++) {
  //   (function () {
  //     var temp = i;
  //     numDom[i].onclick = function () {
  //       var num = numDom[temp].getAttribute("data-num");
  //       result.value = num;
  //     }
  //   })();
  // }

  // // 方法五
  // for (var i = 0; i < numDom.length; i++) {
  //   numDom[i].i = i;
  //   numDom[i].onclick = (function () {
  //     var temp = i;
  //     return function () {
  //       var num = numDom[temp].getAttribute("data-num");
  //       result.value = num;
  //     }
  //   })();
  // }
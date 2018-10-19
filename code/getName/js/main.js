var stus = [];
var stusNan = [];
var stusNv = [];

window.onload = () => {
  var CreateOneStu = (num) => {
    let stu = {
      num: num,
      name: 'lei - ' + num,
      sex: Math.random() >= 0.5 ? "男" : "女"
    };
    return stu;
  }

  let createStu = document.getElementById("createStu");
  createStu.addEventListener('click', () => {

    let stuNum = document.getElementById("stuNum").value;
    if (/^\d[0-9]*$/.test(stuNum)) {
      stus = [];
      stusNan = [];
      stusNv = [];
      let stuBox = document.getElementById("stuBox");
      stuBox.innerHTML = "";

      for (let i = 0; i < stuNum; i++) {
        var CreateStu = CreateOneStu(i);
        stus.push(CreateStu);
        CreateStu.sex === "男" ? stusNan.push(CreateStu) : stusNv.push(CreateStu);
        let domX = document.createElement('li');
        domX.className = "stu-item";

        let pNum = document.createElement('p', { class: 'num' });
        let pName = document.createElement('p', { class: 'name' });
        let pSex = document.createElement('p', { class: 'sex' });

        pNum.innerHTML = "学号：" + CreateStu.num;
        pName.innerHTML = "姓名：" + CreateStu.name;
        pSex.innerHTML = "性别：" + CreateStu.sex;

        domX.appendChild(pNum);
        domX.appendChild(pName);
        domX.appendChild(pSex);

        stuBox.appendChild(domX);
      }

    } else {
      alert("请输入正确的数字");
    }
  });

  var checkStu = function (sex, id, maxNum) {
    var domStu = document.getElementsByClassName("stu-item");
    for (let i = 0; i < domStu.length; i++) {
      domStu[i].className = "stu-item";
    }

    let randomNum = Math.floor(Math.random() * maxNum);
    if (sex === 'nan') {
      domStu[stusNan[randomNum].num].className = "stu-item stu-select";
    }else{
      domStu[stusNv[randomNum].num].className = "stu-item stu-select";
    }

  };

  let getStu = document.getElementById("getStu");
  var checkTime = null;
  getStu.addEventListener('click', () => {

    // if(getStu.value==="开始随机选取"){
    //   getStu.value="停止";
      if (stus.length === 0) {
        alert("没有学生哦");
      } else {
        let xDom = document.getElementsByName("sexRadio");
        let nowId = null;
        for (let i = 0; i < xDom.length; i++) {
          if (xDom[i].checked === true) {
            nowId = xDom[i].id;
            break;
          }
        }
        let t = 50;
        let fNan = function(){
          let maxNum = stusNan.length;
          let id = Math.floor(Math.random() * maxNum);
          checkStu('nan', id, maxNum);
          clearInterval(checkTime);
          if(t
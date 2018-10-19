tipLeft = 8;

var addClass = function (_selector, _className, all, n) {
  // var selectorDom = document.querySelector(selector);
  // selectorDom.className = selectorDom.className + " " + className;
  // 上面这样写会导致无限添加class名在标签上
  // n = -1 所有的dom都操作,不然操作 element[n]
  all = all || true;
  n = n || -1;

  var elements = [];
  if (all == false) {
    elements.push(document.querySelector(_selector));
  } else {
    elements = document.querySelectorAll(_selector);
  }
  if (n > -1 && all == true) {
    var classList = elements[n].className.split(' ');
    if (classList.indexOf(_className) == -1) {
      classList.push(_className);
    }
    var classNames = classList.join(' ');
    elements[n].className = classNames;
  } else {
    for (const element of elements) {
      var classList = element.className.split(' ');
      if (classList.indexOf(_className) == -1) {
        classList.push(_className);
      }
      var classNames = classList.join(' ');
      element.className = classNames;
    }
  }

}

var delClass = function (_selector, _className, all, n) {
  all = all || true;
  n = n || -1;
  
  var elements = [];
  if (all == false) {
    elements.push(document.querySelector(_selector));
  } else {
    elements = document.querySelectorAll(_selector);
  }

  if (n > -1 && all == true) {
    var classList = elements[n].className.split(' ');
    var i = classList.indexOf(_className);
    if (i != -1) {
      classList.splice(i, 1);
    }
    var classNames = classList.join(' ');
    elements[n].className = classNames;
  } else {
    for (const element of elements) {
      var classList = element.className.split(' ');
      var i = classList.indexOf(_className);
      if (i != -1) {
        classList.splice(i, 1);
      }
      var classNames = classList.join(' ');
      element.className = classNames;
    }
  }
}

var addAnimate = function (_selector, _className) {
  addClass(_selector, "animated");
  addClass(_selector, _className);
}


window.onload = function () {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    // 缩放 zoom
    // zoom: true,
    spaceBetween: 30,
    mousewheel: true,
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }

  });


  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,

    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  var navTip = document.querySelector(".header__nav-item-tip");

  document.querySelector(".nav-list-1").onmouseout = function () {
    navTip.style.left = tipLeft + 'px';

  }
  document.querySelector(".nav-list-2").onmouseout = function () {
    navTip.style.left = tipLeft + 'px';

  }
  document.querySelector(".nav-list-3").onmouseout = function () {
    navTip.style.left = tipLeft + 'px';

  }
  document.querySelector(".nav-list-4").onmouseout = function () {
    navTip.style.left = tipLeft + 'px';

  }
  document.querySelector(".nav-list-5").onmouseout = function () {
    navTip.style.left = tipLeft + 'px';

  }

  document.querySelector(".nav-list-1").onmouseover = function () {
    var navTipLeft = 8;
    navTip.style.left = navTipLeft + "px";
  }
  document.querySelector(".nav-list-2").onmouseover = function () {
    var navTipLeft = 90;
    navTip.style.left = navTipLeft + "px";
  }
  document.querySelector(".nav-list-3").onmouseover = function () {
    var navTipLeft = 190;
    navTip.style.left = navTipLeft + "px";
  }
  document.querySelector(".nav-list-4").onmouseover = function () {
    var navTipLeft = 300;
    navTip.style.left = navTipLeft + "px";
  }
  document.querySelector(".nav-list-5").onmouseover = function () {
    var navTipLeft = 412;
    navTip.style.left = navTipLeft + "px";
  }

  window.onscroll();
}


window.onscroll = function () {
  var top = document.documentElement.scrollTop;
  if (top >= 130) {
    addClass(".header", "header-active", false);
    addClass(".header__nav-a", "header__nav-a-leave", true);
  } else {
    delClass(".header", "header-active");
    delClass(".header__nav-a", "header__nav-a-leave", true);
  }

  var navTip = document.querySelector(".header__nav-item-tip");
  // 750 1520 2310 3100
  var navTipLeft = 8;
  if (top >= 0 && top < 600) {
    navTipLeft = 8;
    addClass(".header__nav-a", "header__nav-a-active", true, 0);
    delClass(".header__nav-a", "header__nav-a-active", true, 1);
    delClass(".header__nav-a", "header__nav-a-active", true, 2);
    delClass(".header__nav-a", "header__nav-a-active", true, 3);
    delClass(".header__nav-a", "header__nav-a-active", true, 4);

    addAnimate(".screen-1__wrap-title", "slideInLeft");
    addAnimate(".screen-1__wrap-info-left", "slideInRight");
    addAnimate(".screen-1__wrap-info-right", "slideInLeft");
    addAnimate(".screen-1__wrap-right", "wobble");

  } else if (top >= 600 && top < 1410) {
    navTipLeft = 90;
    addClass(".header__nav-a", "header__nav-a-active", true, 1);
    delClass(".header__nav-a", "header__nav-a-active", true, 0);
    delClass(".header__nav-a", "header__nav-a-active", true, 2);
    delClass(".header__nav-a", "header__nav-a-active", true, 3);
    delClass(".header__nav-a", "header__nav-a-active", true, 4);

    addAnimate(".screen-2__title", "fadeInDown");
    addAnimate(".screen2-left", "fadeInLeft");
    addAnimate(".screen2-right", "fadeInRight");
    addAnimate("#my-name", "fadeIn");
    addAnimate("#my-name", "infinite");
    // addAnimate(".swiper-pagination-bullet", "flash");
    // addAnimate(".swiper-pagination-bullet", "infinite");

  } else if (top >= 1410 && top < 2155) {
    navTipLeft = 190;
    addClass(".header__nav-a", "header__nav-a-active", true, 2);
    delClass(".header__nav-a", "header__nav-a-active", true, 1);
    delClass(".header__nav-a", "header__nav-a-active", true, 0);
    delClass(".header__nav-a", "header__nav-a-active", true, 3);
    delClass(".header__nav-a", "header__nav-a-active", true, 4);

    addAnimate(".screen-3__title", "fadeInDown");
    addAnimate(".screen-3__wrap-item-icon", "fadeInLeft");
    addAnimate(".screen-3__wrap-item-info", "fadeInRight");
    // addAnimate("#my-name", "fadeIn");
    // addAnimate("#my-name", "infinite");

  } else if (top >= 2155 && top < 2900) {
    navTipLeft = 300;
    addClass(".header__nav-a", "header__nav-a-active", true, 3);
    delClass(".header__nav-a", "header__nav-a-active", true, 1);
    delClass(".header__nav-a", "header__nav-a-active", true, 2);
    delClass(".header__nav-a", "header__nav-a-active", true, 0);
    delClass(".header__nav-a", "header__nav-a-active", true, 4);



    addAnimate(".screen-4__title", "fadeInDown");
    addAnimate(".screen-4__item-left", "fadeInLeft");
    addAnimate(".screen-4__item-right", "fadeInRight");
    addAnimate(".screen-4__item-middle", "fadeInUp");
  } else {
    navTipLeft = 412;
    addClass(".header__nav-a", "header__nav-a-active", true, 4);
    delClass(".header__nav-a", "header__nav-a-active", true, 1);
    delClass(".header__nav-a", "header__nav-a-active", true, 2);
    delClass(".header__nav-a", "header__nav-a-active", true, 3);
    delClass(".header__nav-a", "header__nav-a-active", true, 0);


    addAnimate(".screen-5__title", "fadeInUp");
    addAnimate(".screen-5__wrap", "fadeInDown");

  }
  tipLeft = navTipLeft;
  navTip.style.left = navTipLeft + "px";

}


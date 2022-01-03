const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// window.addEventListener('scroll', function() {
//   console.log('scroll!');
// });
// 수십개의 함수가 동시에 작동을 해야된다. 이는 화면을 끊기게 만들기도 해서
// 실행되는 함수의 수를 외부에서 가져올 수 있는 javascriptlibrary를 통해서 제어를 해수도록 할 것이다.
// 그래서 다음과 같이 바꿔서 입력하게된다.

const toTopEl = document.querySelector('#to-top');
// 최상단으로 이동하는 화살표

window.addEventListener('scroll', _.throttle(function() {
  console.log('scroll!');
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
      //display 값을 따로 주지 않으면 그냥 투명해진 상태로 그 자리에 그대로 남아있는것이 된다.
    });
    //badgeEl이라는 변수는 하나의 요소이고, 이 요소에는 html의 전역속성을 사용하듯이
    //style이라는 속성을 사용할 수 있다. 그래서 이 style내용으로 css의 속성 display를 사용해서 값으로 none이라는 문자값 추가
   
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0 //요소의 원래 위치
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100 //x축으로의 이동값
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
// 뒤에서 명시하는 선택자들을 전부 찾아서 새로운 변수에 할당할 것이다. 
fadeEls.forEach(function (fadeEl, index) {
// html에서 찾은 fade-in이라는 요소의 갯수만큼 forEach라는 매소드의 인수로 적은 함수가 실행된다. 
// 반복되는 요소 - fadeEl이란 요소는 자체적으로 이름 짓기 가능하다. 
// 반복되는 횟수 - index요소로 입력가능
// gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    // 1초 동안 실행할건데 그것을 몇초뒤에 실행할건지
    opacity: 1
  });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  // direction: horizontal, Swiper 부분에는 horizontal이라는 기본값이 들어가 있다. 그래서 써줄 필요는 없다
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //여기는 세미콜론 안 넣는다.
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal' 수평을 의미하는 데이터가 이미 할당이 되어 있다. 따로 입력할 필요없다.
  autoplay: true, //자동으로 재생이 되게
  loop: true, //반복 재생
  spaceBetween: 30, //사이사이 여백
  slidesPerView: 5, //몇개의 슬라이드 들이 한번에 보일 것이냐
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener ('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // (요소, 멈춤시간, 위아래로 움직이는 크기)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    //무한 반복
    yoyo: true, 
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022
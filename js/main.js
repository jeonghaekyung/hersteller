//메인배너 슬라이드
var mainVisul = new Swiper(".main_visual", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true, //버튼 클릭 여부
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".btn_next",
    prevEl: ".btn_prev",
  },
  effect: "fade",
});

//브랜드스토리
$(document).ready(function () {
  const $section = $('.brand_story');
  $('.accordion_item').click(function () {
    const $this = $(this);
    const bgClass = $this.data('bg'); //현재 요소의 배경 클래스 값 가져오기

    if (!$this.hasClass('active')) {
      $('.accordion_item').removeClass('active');
      $this.addClass('active');

      // 배경 전환
      $section.removeClass('bg1 bg2 bg3').addClass(bgClass);
    }
  });
});

//베스트아이템 배너 슬라이드
var swiper = new Swiper('.best_list', {
  slidesPerView: 4,
  spaceBetween: 26,
  freeMode: true,
  navigation: {
    nextEl: '.btn_next01',
    prevEl: '.btn_prev01',
    clickable: true,
  },
});

//인스타그램 슬라이드
var swiper = new Swiper('.instagram_list', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  spaceBetween: 0,

});


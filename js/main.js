/*모바일용 헤더*/
$(function () {
  $(".btn_hamburger").click(function () {
    $(".mo_menu_container").toggleClass("open");
    $(this).toggleClass("open");
  });
  $(".btn_hamburger.open").click(function () {
    $(".mo_menu_container").removeClass("open");
    $(".btn_hamburger").removeClass("open");
  });
  $(".mo_gnb ul > li").click(function () {
    $(this).find(".depth02").stop().slideToggle();
  });
});

//메인배너 슬라이드
var mainVisul = new Swiper(".main_visual", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

  breakpoints: {
    0: {
      navigation: false
    }, 

    480: { 
      navigation: {
        nextEl: ".btn_next",
        prevEl: ".btn_prev",
      }
    } 
  } 
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

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    481: {
      slidesPerView: 3,
      spaceBetween: 16,
    },

    769: {
      slidesPerView: 4,
      spaceBetween: 26,
    }
  }
});

//인스타그램 슬라이드
var swiper = new Swiper('.instagram_list', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 0,

});



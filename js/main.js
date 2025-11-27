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

//제품 상세페이지 상단 탭메뉴
document.addEventListener('DOMContentLoaded', function () {
  // 탭 링크와 탭 콘텐츠 요소를 모두 가져옵니다.
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  // 탭 링크에 클릭 이벤트 리스너를 추가합니다.
  tabLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // a 태그의 기본 동작(페이지 이동) 방지

      // 1. 탭 링크 활성화 상태 업데이트
      tabLinks.forEach(item => {
        item.classList.remove('active'); // 모든 탭 링크의 active 클래스 제거
      });
      this.classList.add('active'); // 클릭된 링크에 active 클래스 추가

      // 2. 콘텐츠 표시/숨김 처리
      const targetId = this.getAttribute('href'); // href 값(#detail-content)을 가져옴

      tabContents.forEach(content => {
        content.classList.remove('active'); // 모든 콘텐츠 숨김
      });

      // targetId에 해당하는 콘텐츠만 찾아서 표시
      const targetContent = document.querySelector(targetId);
      if (targetContent) {
        targetContent.classList.add('active'); // 타겟 콘텐츠 활성화 (CSS의 display: block 적용)

        // 만약 탭 메뉴가 Sticky 상태라면, 콘텐츠 상단으로 스크롤 이동
        // 이 부분은 필요에 따라 추가/제거 가능
        targetContent.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

//이벤트 상단 탭메뉴
$(function () {
  $(".tab_content").hide();
  const initialTabId = $(".tabs li.on").data("title");
  $("#" + initialTabId).show();
  $(".tabs li").click(function () {
    $(".tabs li").removeClass("on");
    $(this).addClass("on");
    $(".tab_content").hide();
    // 클릭된 탭의 data-title 값을 가져옵니다. (current 또는 past)
    const activeTab = $(this).data("title");
    $("#" + activeTab).fadeIn();
  });
});




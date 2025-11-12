/*gnb*/
$(function(){
  $("#gnb").mouseenter(function(){
    $(".depth02").stop().slideDown(200);
    $("#menuBg").stop().slideDown(200);
  });
  $("#gnb").mouseleave(function(){
    $(".depth02").stop().slideUp(200);
    $("#menuBg").stop().slideUp(200);
  });
})

/*검색창*/
document.addEventListener('DOMContentLoaded', () => {
  // 돋보기 버튼에 ID를 추가했으므로, 이 ID를 사용합니다.
  const openBtn = document.getElementById('search-open-btn');
  const closeBtn = document.getElementById('search-close-btn');
  const searchContainer = document.getElementById('full-search-container');
  const searchInput = document.getElementById('search-input');

  // 검색창 열기 함수
  function openSearch() {
    searchContainer.classList.add('open');
    // 검색창이 열리면 자동으로 입력 필드에 포커스
    setTimeout(() => {
      searchInput.focus();
    }, 300);
  }

  // 검색창 닫기 함수
  function closeSearch() {
    searchContainer.classList.remove('open');
  }

  // 1. 돋보기 아이콘 클릭 시
  if (openBtn) {
    openBtn.addEventListener('click', openSearch);
  }

  // 2. 닫기 버튼 (X 아이콘) 클릭 시
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSearch);
  }

  // 3. ESC 키를 눌렀을 때 닫기
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && searchContainer.classList.contains('open')) {
      closeSearch();
    }
  });
});

/*top버튼*/
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 20) {
      $("#quick_area").fadeIn();
      $("#header").addClass("fixed");
    } else {
      $("#quick_area").fadeOut();
      $("#header").removeClass("fixed");
    }
  });
});

/*모바일용 헤더
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
});*/


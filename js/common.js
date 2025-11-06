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